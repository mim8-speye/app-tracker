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
  const pathname = usePathname();
  const { status, data: session } = useSession();

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
    <nav className="mb-5 py-4 border-b-2 border-gray-200 p-5">
      <Container>
        <Flex justify={"between"}>
          <Flex align={"center"} gap={"3"}>
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
                    className={classNames({
                      "text-gray-800": pathname === link.href,
                      "text-gray-500": pathname !== link.href,
                      "hover:text-gray-800 transition-colors duration-200":
                        true,
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    size={"2"}
                    radius="full"
                    src={session.user!.image!}
                    fallback="?"
                    className="cursor-pointer"
                    referrerPolicy="no-referrer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size={"2"}>{session.user!.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href={"/api/auth/signout"}>Log out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              //<Link href={"/api/auth/signout"}>Log out</Link>
            )}
            {status === "unauthenticated" && (
              <Link href={"/api/auth/signin"}>Log in</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
