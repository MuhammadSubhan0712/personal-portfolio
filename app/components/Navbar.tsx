"use client";
import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setActiveSection("home");
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50">
      <button
        onClick={() => setIsOpen((preVal) => !preVal)}
        className="bg-background card-shadow p-3 md:hidden rounded">
        <img
          className="block dark:hidden"
          src="/public/next.svg"
          alt="menu icon"
        />
        <img
          className="block dark:block"
          src="/public/next.svg"
          alt="menu icon"
        />
      </button>

      <nav
        className={cn("bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out", {
          "opacity-100": isOpen,
          "opacity-0": isOpen,
        })}>
        <ul>
          <li>
            <div
              className={cn("rounded p-1 ", {
                "bg-primary text-white": true,
              })}
              onClick={() => {
                setActiveSection("home");
                scrollToSection("home");
                setIsOpen(false);
              }}>
              Home
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
