import React, { useEffect, useState } from "react";
// import { a } from "react-spring";
import { LuLogIn } from "react-icons/lu";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/vul/logos.jpg";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuopen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const togglemenu = () => {
    setIsMenuOpen(!isMenuopen);
  };
  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Feature",
      path: "feature",
    },
    {
      link: "Pricing",
      path: "pricing",
    },
  ];

  const { isLoggedIn, login, logout,name } = useAuth();
  // const [islogin,setIslogin] = useState(false)

 

  console.log(name)
  // Logout function
  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/auth/logout", {
        withCredentials: true,
      });

      logout(res.data.isLoggedIn);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 left-0 right-0">
        <div className="text-xl flex container mx-auto justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <RouterLink
              to="/"
              href=""
              className="text-2xl font-semibold flex items-center  space-x-3"
            >
              <img
                src={logo}
                alt=""
                className=" w-9  inline-block items-center space-x-1 text-primary"
              />
              <span className="font-bold">Vulture</span>
            </RouterLink>
            <ul className="hidden md:flex space-x-12">
              {navItems.map(({ link, path }) => (
                <Link
                  key={link}
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  activeClass="active"
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {isLoggedIn && (
            <h4 className=" text-xl ml-10">
              Welcome <span className="font-bold ">{name}</span>
            </h4>
          )}

          <div className="space-x-12 hidden md:flex items-center">
            {isLoggedIn ? (
              <>
                <button
                  className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href=""
                  className="hidden lg:flex items-center hover:text-secondary"
                >
                  <LuLogIn className="mr-2" />
                  <RouterLink to="/login">Login</RouterLink>
                </a>
                <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
                  <RouterLink to="/signup">sign up</RouterLink>
                </button>
              </>
            )}

            {/* {isLoggedIn ? (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <RouterLink to="/login">Login</RouterLink>
                </li>
                <li>
                  <RouterLink to="/signup">Signup</RouterLink>
                </li>
              </>
            )} */}
          </div>

          <div className="md:hidden">
            <button
              onClick={togglemenu}
              className="text-white focus:outline-none focus:texxt-gray-300 "
            >
              {isMenuopen ? (
                <FaXmark className="w-6 h-6 text-primary items-center" />
              ) : (
                <FaBars className="w-6 h-6 text-primary items-center" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mt-16 space-y-4 px-4 pt-5 pb-5 bg-secondary md:hidden ${
          isMenuopen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            activeClass="active"
            key={link}
            href={path}
            className="block hover:text-gray-300 text-xl "
          >
            {link}
          </Link>
        ))}

        {isLoggedIn ? (
          <>
            <button
              className="bg-white py-2 px-4 transition-all duration-300 rounded hover:text-primary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <a
              href=""
              className="flex items-center hover:text-white text-xl "
            >
              <LuLogIn className="mr-2" />
              <RouterLink to="/login">Login</RouterLink>
            </a>
            {/* <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              <RouterLink to="/signup">sign up</RouterLink>
            </button> */}
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
