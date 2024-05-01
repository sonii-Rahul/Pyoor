import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo1.svg";
import "../../assets/css/Navbar.css";
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: "Home",
    href: "/", 
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
 
 
];

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`w-full bg-[#F5E9E4] navbar fixed top-0 left-0 text-[#003630] tracking-wider  ${
          scrolling ? "scrolling" : ""
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-center sm:px-6 lg:px-8`}
        >
          <div className="inline-flex items-center space-x-4">
            <span>
              <img src={logo} alt="logo" width="75" />
            </span>
          </div>
          <div className="hidden grow place-content-around lg:flex pr-16">
            <ul className="ml-12 inline-flex space-x-12">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`text-xl  font-semibold ${scrolling ? "item" : "" } tracking-widest font-caveat text-[#003630] hover:text-green-500`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden  px-4 pl-4 ">
            <Menu onClick={toggleMenu} className={`h-6 w-6 cursor-pointer text-${scrolling ? "white" : "black" }`} />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-center ">
                    <div className="inline-flex items-center space-x-4 ">
                      <img src={logo} alt="logo" width="125" />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Button text
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;