import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import HeaderLinks from "./headerLinks";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Image src="/icon.png" height={100} width={100} alt="Logo Icon" priority/>
        <Link href="/" className="btn btn-ghost text-xl">
          Template
        </Link>
      </div>
      <div className="navbar-center hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <HeaderLinks />
        </ul>
      </div>
      <div className="navbar-end flex justify-end dropdown dropdown-end md:hidden">
        <button className="btn btn-ghost">
          <Menu />
        </button>

        <ul
          tabIndex="0"
          className="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2 top-12"
        >
          <HeaderLinks />
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex justify-end">
        <div className="form-control">
          <input
            type="text"
            name="search"
            placeholder="Find "
            className="input input-bordered w-96 border-blue-400 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;