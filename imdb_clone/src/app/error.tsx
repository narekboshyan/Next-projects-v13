"use client";

import React, { useEffect } from "react";

type Props = {};

const Error: React.FC<Props> = (error, reset) => {
 useEffect(() => {
  console.log(error);
 }, [error]);

 return (
  <div className="text-center mt-10 ">
   <h1>Something went wrong</h1>
   <button onClick={() => reset()} className="hover:text-amber-600">
    Try Again
   </button>
  </div>
 );
};

export default Error;
