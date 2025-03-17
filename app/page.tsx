import React from "react";
import { LuMessageCircleWarning } from "react-icons/lu";
import bckgrnd from "@/app/assets/bckgrnd.webp";
import { Link } from "./components";
import { Button } from "@radix-ui/themes";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex-grow">
        <div
          className="relative bg-cover bg-center w-full h-screen"
          style={{
            backgroundImage: `url(${bckgrnd.src})`,
          }}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-70 z-10" />

          <div className="relative z-20 flex flex-col justify-center items-center text-center text-white h-screen">
            <LuMessageCircleWarning className="text-6xl mb-4" />
            <h1 className="text-4xl font-bold mb-4">Welcome to App Tracker</h1>
            <p className="text-lg mb-4">
              Effortlessly manage and track your app issues with our intuitive
              platform.
            </p>
            <Button>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Speye App Tracker. All rights
        reserved.
      </footer>
    </div>
  );
};

export default HomePage;
