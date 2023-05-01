"use client";
import Link from "next/link";
import React from "react";

import { useSearchParams } from "next/navigation";

type Props = {
 title: string;
 param: string;
};

const NavbarItem: React.FC<Props> = ({ title, param }) => {
 const searchParams = useSearchParams();

 const genre = searchParams.get("genre");

 const className =
  genre &&
  genre === param &&
  "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg";

 return (
  <div>
   <Link
    href={`/?genre=${param}`}
    className={`${className || ""} hover:text-amber-600 font-semibold p-2`}
   >
    {title}
   </Link>
  </div>
 );
};

export default NavbarItem;
