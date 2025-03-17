import React from "react";
import NavBar from "../components/NavBar";
import { Container } from "@radix-ui/themes";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="p-5">
        <Container>{children}</Container>
      </main>
    </>
  );
}
