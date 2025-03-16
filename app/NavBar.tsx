"use client";

import Link from "next/link";
import React from "react";
import { LuMessageCircleWarning } from "react-icons/lu";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";

const NavBar = () => {
  return (
    <nav className="mb-5 py-4 border-b-2 border-gray-200 p-5">
      <Container>
        <Flex justify={"between"}>
          <Flex align={"center"} gap={"3"}>
            <Link href={"/"}>
              <LuMessageCircleWarning className="size-5"></LuMessageCircleWarning>
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return null;

  if (status === "unauthenticated")
    return (
      <Link className="nav-link" href={"/api/auth/signin"}>
        Log in
      </Link>
    );

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            size={"2"}
            radius="full"
            src={session!.user!.image!}
            fallback="?"
            className="cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size={"2"}>{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href={"/api/auth/signout"}>Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/",
    },
    {
      name: "Issues",
      href: "/issues/list",
    },
  ];

  return (
    <ul className="flex space-x-5 items-center">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={classNames({
              "nav-link": true,
              "!text-gray-800": pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
