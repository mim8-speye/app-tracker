import React from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface LinkProps {
  href: string;
  children: string;
}

const rLink = ({ href, children }: LinkProps) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default rLink;
