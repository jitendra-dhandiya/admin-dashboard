import React, { Fragment } from "react";

const Card = ({data,label,icon}) => {
  return (
    <Fragment>
      <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
          {icon}
        </div>
        <div className="mt-4  flex items-center justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black">{data}</h4>
            <span className="text-sm font-medium">{label}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
