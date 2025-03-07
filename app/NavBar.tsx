import Link from "next/link";
import React from "react";
import { LuMessageCircleWarning } from "react-icons/lu";

const NavBar = () => {
  const links = [
    {
      name: "Dashboard",
      href: "/",
    },
    {
      name: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-5 mb-5 h-15 items-center border-b-2 border-gray-200 p-5">
      <div>
        <Link href={"/"}>
          <LuMessageCircleWarning className="size-5"></LuMessageCircleWarning>
        </Link>
      </div>
      <ul className="flex space-x-5 items-center">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-gray-500 hover:text-gray-800 transition-colors "
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
