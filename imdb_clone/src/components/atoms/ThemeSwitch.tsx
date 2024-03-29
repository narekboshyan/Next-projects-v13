"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

type Props = {};

const ThemeSwitch: React.FC<Props> = () => {
 const { theme, setTheme, systemTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => setMounted(true), []);
 if (!mounted) return null;

 const currentTheme = theme === "system" ? systemTheme : theme;

 return (
  <>
   {currentTheme === "dark" ? (
    <MdLightMode
     className="text-xl cursor-pointer hover:text-amber-500"
     onClick={() => setTheme("light")}
    />
   ) : (
    <BsFillMoonFill
     className="text-xl cursor-pointer hover:text-amber-500"
     onClick={() => setTheme("dark")}
    />
   )}
  </>
 );
};

export default ThemeSwitch;
