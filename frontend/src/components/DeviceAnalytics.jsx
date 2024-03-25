import React from "react";
import ReactApexChart from "react-apexcharts";
import { deviceAnalyticsChartOptions } from "../constants";
import { useSelector } from "react-redux";
import { selectVisitors } from "../Redux-Toolkit/visitors/visitorSlice";

function getDeviceByVisitors(data, getDevice) {
  if (
    data &&
    data.length &&
    data.filter((item) => item.device === getDevice).length === 0
  )
    return 0;

  return data && data.length
    ? data
        .filter((item) => item.device === getDevice)
        .reduce((acc, obj) => acc + obj.visitors, 0)
    : 0;
}
const DeviceAnalytics = () => {
  const allVisitors = useSelector(selectVisitors);

  const series = [
    getDeviceByVisitors(allVisitors, "Desktop"),
    getDeviceByVisitors(allVisitors, "Laptop"),
    getDeviceByVisitors(allVisitors, "Tablet"),
    getDeviceByVisitors(allVisitors, "Mobile"),
  ];
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-5">
      <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Visitors By Device</p>
        <div className="w-full mb-2">
          <div
            id="deviceAnalyticsChart"
            className="mx-auto flex justify-center"
          >
            <ReactApexChart
              options={deviceAnalyticsChartOptions}
              series={series}
              type="donut"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceAnalytics;
