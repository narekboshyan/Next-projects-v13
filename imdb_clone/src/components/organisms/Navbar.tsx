import React from "react";
import NavbarItem from "../atoms/NavbarItem";

type Props = {};

const Navbar: React.FC<Props> = () => {
 return (
  <div className="flex justify-center gap-4 dark:bg-gray-600 bg-amber-100 lg:text-lg p-4  ">
   <NavbarItem title="Trending" param="trending" />
   <NavbarItem title="Top Rated" param="topRated" />
  </div>
 );
};

export default Navbar;
