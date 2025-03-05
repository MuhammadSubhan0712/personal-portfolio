"use client";
import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import Reveal from "./Reveal";

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
    <div
      className="fixed top-12 right-1 left-9 mx-auto flex 
    flex-col gap-2.5 items-center z-50 md:right-auto 
    md:left-1/2 md:translate-x-1/2 ">
      <button
        onClick={() => setIsOpen((preVal) => !preVal)}
        className="bg-background card-shadow p-3 md:hidden rounded">
        <img className="block dark:hidden" src="/menu_icon_light.svg" alt="menu icon" />
        <img className="hidden dark:block" src="/menu_icon_dark.svg" alt="menu icon" />
      </button>

      <Reveal initialY={-20} duration={0.5}>
        <nav
          className={cn(
            "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out",
            {
              "opacity-100": isOpen,
              "opacity-0 md:opacity-100": !isOpen,
            }
          )}>
          <ul
            className="flex justify-center flex-col items-center gap-4 
        text-lg font-normal md:flex-row md:justify-center">
            <li>
              <div
                className={cn(
                  "rounded p-1 duration-300 ease-in-out  hover:cursor-pointer",
                  {
                    "bg-primary text-white": activeSection === "home",
                  }
                )}
                onClick={() => {
                  setActiveSection("home");
                   scrollToSection("home");
                  setIsOpen(false);
                }}>
                Home
              </div>
            </li>

            <li>
              <div
                className={cn(
                  "rounded p-1 duration-300 ease-in-out hover:cursor-pointer",
                  {
                    "bg-primary text-white": activeSection === "skills",
                  }
                )}
                onClick={() => {
                  setActiveSection("skills");
                  scrollToSection("skills");
                  setIsOpen(false);
                }}>
                Skills
              </div>
            </li>

            <li>
              <div
                className={cn(
                  "rounded p-1 duration-300 ease-in-out hover:cursor-pointer",
                  {
                    "bg-primary text-white": activeSection === "projects",
                  }
                )}
                onClick={() => {
                  setActiveSection("projects");
                  scrollToSection("projects");
                  setIsOpen(false);
                }}>
                Projects
              </div>
            </li>

            {/* <li>
              <div
                className={cn(
                  "rounded p-1 duration-300 ease-in-out  hover:cursor-pointer",
                  {
                    "bg-primary text-white": activeSection === "testimonials",
                  }
                )}
                onClick={() => {
                  setActiveSection("testimonials");
                  scrollToSection("testimonials");
                  setIsOpen(false);
                }}>
                Testimonials
              </div>
            </li> */}

            {/* <li>
              <div
                className={cn(
                  "rounded p-1 duration-300 ease-in-out hover:cursor-pointer",
                  {
                    "bg-primary text-white": activeSection === "experience",
                  }
                )}
                onClick={() => {
                  setActiveSection("experience");
                  scrollToSection("experience");
                  setIsOpen(false);
                }}>
                Experience
              </div>
            </li> */}

            <li>
              <div
                className={cn(
                  "rounded p-1 whitespace-nowrap duration-300 ease-in-out hover:cursor-pointer",
                  {
                    "bg-primary text-white": activeSection === "contact",
                  }
                )}
                onClick={() => {
                  setActiveSection("contact");
                  scrollToSection("contact");
                  setIsOpen(false);
                }}>
                Contact Me
              </div>
            </li>
          </ul>
        </nav>
      </Reveal>
    </div>
  );
};

export default Navbar;
