import React, { Fragment } from "react";
import { createVisitorAsync } from "../Redux-Toolkit/visitors/visitorSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

const AddVisitorForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      visitors: "",
      location: "",
      premiumUserNo: "",
      device: "",
      month: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values,{resetForm}) => {
      dispatch(createVisitorAsync(values));
      resetForm();
    },
  });
  return (
    <Fragment>
      <div>
        <div>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Visitor form</h3>
            </div>

            <form
              className=" p-6 flex-auto flex flex-col gap-5 "
              onSubmit={formik.handleSubmit}
            >
              <label
                htmlFor="visitors"
                className="block text-lg font-medium  text-gray-900"
              >
                Visitors
              </label>
              <input
                type="number"
                placeholder="Visitors"
                id="visitors"
                {...formik.getFieldProps("visitors")}
              />

              <label
                htmlFor="premiumUserNo"
                className="block text-lg font-medium  text-gray-900"
              >
                Premium UserNo
              </label>
              <input
                type="number"
                placeholder="User  Numbers"
                {...formik.getFieldProps("premiumUserNo")}
              />
                   <label
                htmlFor="location"
                className="block text-lg font-medium  text-gray-900"
              >
                Location
              </label>
              <select name="location" {...formik.getFieldProps("location")}>
                <option>Select a Country</option>
                <option value="India" id="India">India</option>
                <option value="USA" id="USA">USA</option>
                <option value="Canada" id="Canada">Canada</option>
                <option value="China" id="China">China</option>
                <option value="UK" id="UK">UK</option>
              </select>
              <label
                htmlFor="device"
                className="block text-lg font-medium  text-gray-900"
              >
                Device
              </label>
              <select name="device" {...formik.getFieldProps("device")}>
                <option value="">Select a Device</option>
                <option value="Mobile" id="Mobile">Mobile</option>
                <option value="Tablet" id="Tablet">Tablet</option>
                <option value="Laptop" id="Laptop">Laptop</option>
                <option value="Desktop" id="Desktop">Desktop</option>
              </select>

              <label
                htmlFor="month"
                className="block text-lg font-medium  text-gray-900"
              >
                month
              </label>
              <select name="month" {...formik.getFieldProps("month")}>
                <option value="">Select an Month</option>
                <option value="Janurary" id="jan">
                  Janurary
                </option>
                <option value="Feburary" id="feb">
                  Feburary
                </option>
                <option value="March" id="mar">
                  March
                </option>
                <option value="April" id="apr">
                  April
                </option>
                <option value="May" id="may">
                  May
                </option>
                <option value="June" id="jun">
                  June
                </option>
                <option value="July" id="jul">
                  July
                </option>
                <option value="August" id="aug">
                  August
                </option>
                <option value="September" id="sep">
                  September
                </option>
                <option value="October" id="oct">
                  October
                </option>
                <option value="November" id="nov">
                  November
                </option>
                <option value="December" id="dec">
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

export default AddVisitorForm;
