import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  const [issticky, setissticky] = useState(false);

  //toggle menu
  const togglemenu = () => {
    setismenuopen(!ismenuopen);
  };
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 100) {
        setissticky(true);
      } else {
        setissticky(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.addEventListener("scroll", handlescroll);
    };
  }, []);
  //navitems
  const navitems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
    { link: "Preparation", path: "/preparation" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${issticky ? "sticky top-0 left-0 right-0 bg-blue-100":""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* <logo></logo> */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex  item-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          {/* //nav item for large device */}
          <ul className="md:flex space-x-12 hidden">
            {navitems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/* menu btn for the mobile device */}
          <div className="md:hidden">
            <button
              onClick={togglemenu}
              className="text-black focus:outline-none"
            >
              {ismenuopen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* nav items for sm devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            ismenuopen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navitems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer "
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
