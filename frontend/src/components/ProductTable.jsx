import React from "react";
import { productTableHeaders } from "../constants";
import { useSelector } from "react-redux";
import { selectProducts } from "../Redux-Toolkit/products/productSlice";
const ProductTable = () => {
  const product = useSelector(selectProducts)
  return (
    <div>
<div className="flex flex-col">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              {
                productTableHeaders && productTableHeaders.map((item)=>(
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left" key={item.id}>
                        {item.label}
              </th>
                ))
              }
            </tr>
          </thead>
          <tbody>

           {
            product && product?.map((item)=>(
                <tr className="bg-gray-100 border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.month}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.price}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.sales}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.visitors}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.price*item.sales}
                </td>
              </tr>
            ))
           }

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductTable;
