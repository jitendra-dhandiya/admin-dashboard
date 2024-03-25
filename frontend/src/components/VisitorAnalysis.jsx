import React from "react";
import ReactApexChart from "react-apexcharts";
import { visitorAnalyticsChartOptions } from "../constants";
import { useSelector } from "react-redux";
import { selectVisitors } from "../Redux-Toolkit/visitors/visitorSlice";

function getAllVisitorByCountry (data,country) {
  if(data && data.length===0) return 0
  return data
  .filter((item)=>item.location===country)
  .reduce((acc,visitorItem)=>acc+visitorItem.visitors,0)
}

function getAllPremiumVisitorByCountry (data,country) {
  if(data && data.length===0) return 0
  return data
  .filter((item)=>item.location===country)
  .reduce((acc,visitorItem)=>acc+visitorItem.premiumUserNo,0)
}

const VisitorAnalysis = () => {
  const allVisitor = useSelector(selectVisitors);
  const uniqueLocation = [...new Set(allVisitor?.map((item) => item.location))];

  const maxUniqueLocationToShow = uniqueLocation.slice(
    0,
    uniqueLocation && uniqueLocation.length > 6 ? 6 : uniqueLocation.length
  );

  let updatedOptions = {
    ...visitorAnalyticsChartOptions,
    xaxis: {
      categories: maxUniqueLocationToShow,
    },
  };

  const series = [
    {
      name: "Visitors",
      data:maxUniqueLocationToShow?.map((locationItem)=>
      getAllVisitorByCountry(allVisitor,locationItem)
      ),
    },
    {
      name: "Premium Visitors",
      data: maxUniqueLocationToShow?.map((locationItem)=>
      getAllPremiumVisitorByCountry(allVisitor,locationItem)
      )
    },
  ];
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-4">
      <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Visitors By Country</p>
        <div className="w-full">
          <div id="YearlyAnalyticsChart" className="-ml-5">
            <ReactApexChart
              options={updatedOptions}
              series={series}
              type="area"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorAnalysis;
