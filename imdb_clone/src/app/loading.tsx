import React from "react";
import Image from "next/image";

type Props = {};

const Loading: React.FC<Props> = () => {
 return (
  <div className="flex justify-center">
   <Image src="/spinner.svg" alt="Loading spinner" width={100} height={100} />
  </div>
 );
};

export default Loading;
