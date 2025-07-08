import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  Squares2X2Icon,
  UsersIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/dashboards", label: "Dashboards" },
  { to: "/segments", label: "Segments"},
  { to: "/account", label: "Account" },
  { to: "/settings", label: "Settings" },
];

const Navbar = () => (
  <nav className="bg-blue-700 p-4 flex justify-center">
    <div className="bg-white rounded-full shadow flex space-x-6 px-6 py-2">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center space-x-2 text-sm font-medium px-2 py-1 border-b-2 ${
              isActive
                ? "text-blue-600 border-blue-600"
                : "text-gray-700 border-transparent hover:text-blue-600"
            }`
          }
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  </nav>
);

export default Navbar;
