import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IconHome } from "@tabler/icons-react";

function Navbar() {
  const redirect = useNavigate();
  const [dropdown, setDropdown] = useState(true);
  const [auth, setAuth] = useRecoilState(authenticated);
  const show_dropdown = () => {
    setDropdown(!dropdown);
  };

  const logout = async (e) => {
    try {
      let response = await axios.post("logout");
      setAuth({ check: false });
      localStorage.removeItem("tokenUser");
      toast.success(response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      redirect("/login");
    } catch (e) {
      toast.error(e.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500">
      <div className="flex items-center justify-between px-4 py-4 text-white">
        <a href="/" className="text-xl md:ml-6 flex">
          <IconHome className="stroke-1 mr-4" />
          <span>Newbook</span>
        </a>
        <div className="md:mr-6">
          <div className="hidden md:block">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {auth.check ? (
                <li>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.pravatar.cc/30"
                      className="rounded-full lg:ml-0 w-{150} h-{150} border border-grey-100 text-xs"
                      alt="image"
                    />
                    <button
                      onClick={show_dropdown}
                      className="flex items-center justify-between w-full text-xs py-2 pl-3 pr-4 text-white rounded hover:text-gray-300 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                      {auth.user.name}
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Dropdown menu */}
                  <div
                    id="dropdownNavbar"
                    className={`${
                      dropdown ? "hidden" : ""
                    } z-10 fixed font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <button
                        onClick={logout}
                        className="block w-full px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </li>
              ) : (
                <div className="space-x-4">
                  <a className="text-sm font-semibold" href="/login">
                    Login
                  </a>
                  <a className="text-sm font-semibold" href="/register">
                    Register
                  </a>
                </div>
              )}
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 mr-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
