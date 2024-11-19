
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  
  return (
    <div className="text-white w-full fixed z-50 h-20 flex justify-between px-10 bg-custom-bg bg-cover bg-center bg-no-repeat bg-[#000000]">
      <div className="flex items-center gap-2 mt-2">
        <div className="">
          <Image src="images/logo_navbar.svg" height={52} width={50} alt="Logo" />
        </div>
        <div>
          <p className="font-inter text-xs font-medium">CODERS.DYP</p>
        </div>
      </div>
      <div className="w-96 my-auto">
        <ul className="flex justify-between font-inter font-medium text-base">
          <Link href="/">
            <li>HOME</li>
          </Link>
          <Link href="team">
            <li>TEAM</li>
          </Link>
          <Link href="events">
            <li>EVENTS</li>
          </Link>
          <Link href="newsletter">
            <li>NEWSLETTER</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;