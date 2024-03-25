import React from "react";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import {  selectProducts } from "../Redux-Toolkit/products/productSlice";
import { selectVisitors } from "../Redux-Toolkit/visitors/visitorSlice";
import YearlyAnalyticsChart from "./YearlyAnalyticsChart";
import VisitorAnalysis from './VisitorAnalysis'
import DeviceAnalytics from './DeviceAnalytics'
const Dashboard = () => {
 
  const product = useSelector(selectProducts);
  const visitors = useSelector(selectVisitors);
 
  
  return (
    <div>
      {/* This DIV For Card Components */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        <Card
          icon={<FaUsers size={25} />}
          data={
            visitors && visitors.length
              ? visitors.reduce(
                  (acc, visitorItem) =>
                    parseInt(acc + visitorItem.premiumUserNo),
                  0
                )
              : 0
          }
          label={"Total Premium Visitors"}
        />

        <Card
          data={product && product.length}
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          label={"Total Products"}
        />
        <Card
          data={
            product && product.length
              ? product.reduce(
                  (acc, productItem) => parseInt(acc + productItem.sales),
                  0
                )
              : 0
          }
          label={"Total Sales"}
          icon={<BiMoneyWithdraw size={25} />}
        />

        <Card
          data={
            visitors && visitors.length
              ? visitors.reduce(
                  (acc, visitorItem) => parseInt(acc + visitorItem.visitors),
                  0
                )
              : 0
          }
          label={"Total Visitors"}
          icon={<BsFillPersonCheckFill size={25} />}
        />
      </div>

      {/* This DIV For YEARLY ANALYSIS CHART */}
      <div className="mt-44 grid-cols-12 grid gap-4 2xl:mt-7 2xl:gap-7">
          <YearlyAnalyticsChart
           allProducts={
            product && product.length
              ? product?.map((productItem) => ({
                  ...productItem,
                  revenue:
                    productItem.price * productItem.sales -
                    productItem.sales * 10,
                  cost: productItem.sales * 10,
                }))
              : []
          }
          
          />
          <VisitorAnalysis/>
          
      </div>
      <div className="cols-span-12">
            <DeviceAnalytics/>
          </div>
    </div>
  );
};

export default Dashboard;
