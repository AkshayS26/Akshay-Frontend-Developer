import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center w-full h-20 bg-transparent md:px-20 px-10">
        <div>
          <Link to="/">
            <img src="/logo.svg" alt="SpaceX" className="w-16 lg:w-auto" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center justify-center  gap-9 sm font-semibold text-white text-xl uppercase">
            <li>
              <a href="/capsules" className="link-hover">
                capsules
              </a>
            </li>
            <li>
              <a href="/rockets" className="link-hover">
                Rockets
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
