import React from "react";
import ReactApexChart from "react-apexcharts";
import { YearlyAnalyticsChartOptions } from "../helpers/YearlyAnalyticsChartOptions";

function getSales(Aproduct, getMonth) {
  if (Aproduct.filter((item) => item.month === getMonth).length === 0) return 0;
  return Aproduct.filter((item) => item.month === getMonth).reduce(
    (acc, productItem) => acc + productItem.sales,
    0
  );
}
function getRevenue(Aproducts, getMonth) {
  if (Aproducts.filter((item) => item.month === getMonth).length === 0) return 0;

  return Aproducts
    .filter((item) => item.month === getMonth)
    .reduce((acc, productItem) => acc + productItem.revenue, 0);
}

const YearlyAnalyticsChart = ({allProducts}) => {
  const products = allProducts;
  const series = [
    {
      name: "Sales",
      data: [
        getSales(products,"Janurary"),
        getSales(products,"Feburary"),
        getSales(products,"March"),
        getSales(products,"April"),
        getSales(products,"May"),
        getSales(products,"June"),
        getSales(products,"July"),
        getSales(products,"August"),
        getSales(products,"September"),
        getSales(products,"October"),
        getSales(products,"November"),
        getSales(products,"December"),
      ],
    },
    {
      name: "Revenue",
      data: [
        getRevenue(products,"Janurary"),
        getRevenue(products,"Feburary"),
        getRevenue(products,"March"),
        getRevenue(products,"April"),
        getRevenue(products,"May"),
        getRevenue(products,"June"),
        getRevenue(products,"July"),
        getRevenue(products,"August"),
        getRevenue(products,"September"),
        getRevenue(products,"October"),
        getRevenue(products,"November"),
        getRevenue(products,"December"),
      ],
    },
  ];
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-8">
      <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Yearly Analytics Overview</p>
        <div className="w-full">
          <div id="YearlyAnalyticsChart" className="-ml-5">
            <ReactApexChart
              options={YearlyAnalyticsChartOptions}
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

export default YearlyAnalyticsChart;