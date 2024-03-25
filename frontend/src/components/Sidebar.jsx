import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import {TbBrandProducthunt} from 'react-icons/tb'
import {PiUsersFourLight} from 'react-icons/pi'
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../Redux-Toolkit/auth/authSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const user = useSelector(selectLoggedInUser)
  const username = user?.username

  const menus = [
    { name: "Dashboard", link: `/dashboard/${username}`, icon: MdOutlineDashboard },
    { name: "Products", link: "/products", icon: TbBrandProducthunt ,margin: true },
    { name: "Visitors", link: "/visitors", icon: PiUsersFourLight,margin: true  },
    
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
    
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4
        `}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          
        </div>
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href={"/"} className="text-[30px] text-white">
          Analytics
        </Link>
      </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;