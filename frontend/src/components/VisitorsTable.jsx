import React from "react";
import { useSelector } from "react-redux";
import { selectVisitors } from "../Redux-Toolkit/visitors/visitorSlice";
import { visitorsTableHeaders } from "../constants";

const VisitorsTable = () => {
  const visitor = useSelector(selectVisitors);
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    {visitorsTableHeaders &&
                      visitorsTableHeaders?.map((item) => (
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          key={item.id}
                        >
                          {item.label}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {visitor &&
                    visitor?.map((item) => (
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.visitors}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.location}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.device}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.premiumUserNo}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.month}
                        </td>
                        
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorsTable;
