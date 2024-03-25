import React, { Fragment } from "react";
import { createproductAsync } from "../Redux-Toolkit/products/productSlice";
import { useDispatch } from "react-redux";
import { useFormik} from "formik";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      visitors: "",
      price: "",
      sales: "",
      month: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values , {resetForm}) => {
      dispatch(createproductAsync(values));
      resetForm()
    },
  });
  return (
    <Fragment>
      <div>
        <div>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Product form</h3>
            </div>

            <form
              className=" p-6 flex-auto flex flex-col gap-5 "
              onSubmit={formik.handleSubmit}
            >
              <label
                htmlFor="name"
                className="block text-lg font-medium  text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                {...formik.getFieldProps("name")}
              />

              <label
                htmlFor="visitors"
                className="block text-lg font-medium  text-gray-900"
              >
                No. of visitors
              </label>
              <input
                type="number"
                placeholder="Visitors"
                {...formik.getFieldProps("visitors")}
              />

              <label
                htmlFor="price"
                className="block text-lg font-medium  text-gray-900"
              >
                Product Price
              </label>
              <input
                type="number"
                placeholder="Price"
                {...formik.getFieldProps("price")}
              />

              <label
                htmlFor="sales"
                className="block text-lg font-medium  text-gray-900"
              >
                No. of sales
              </label>
              <input
                type="number"
                placeholder="Sales"
                {...formik.getFieldProps("sales")}
              />

              <label
                htmlFor="sales"
                className="block text-lg font-medium  text-gray-900"
              >
                Month
              </label>
              <select name="month" {...formik.getFieldProps("month")}>
                <option value="">Select an Month</option>
                <option value="Janurary" id="Janurary">
                  Janurary
                </option>
                <option value="Feburary" id="Feburary">
                  Feburary
                </option>
                <option value="March" id="March">
                  March
                </option>
                <option value="April" id="April">
                  April
                </option>
                <option value="May" id="May">
                  May
                </option>
                <option value="June" id="June">
                  June
                </option>
                <option value="July" id="July">
                  July
                </option>
                <option value="August" id="August">
                  August
                </option>
                <option value="September" id="September">
                  September
                </option>
                <option value="October" id="October">
                  October
                </option>
                <option value="November" id="November">
                  November
                </option>
                <option value="December" id="December">
                  December
                </option>
              </select>

              <div className="flex gap-2 items-center justify-end p-6 border-t border-solid rounded-b">
                <button
                  className="inline-flex items-center justify-center bg-indigo-500 px-6 py-2 text-lg text-gray-50 font-medium 
      hover:bg-red-500
      tracking-wide"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddProductForm;
