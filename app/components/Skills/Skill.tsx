"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Reveal from "../Reveal";

type Props = {
  icon: string;
  name: string;
};

const Skill = ({ icon, name }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const xDistance = useMotionValue(0);
  const yDistance = useMotionValue(0);

  const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`;
  console.log(mask); 
  // const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}
  // px ${yDistance}px, #000, transparent)`;


  const handleMouseMove = (event: MouseEvent) => {
    if (!ref.current) return;
    const clientRect = ref.current.getBoundingClientRect();
  
    const x = event.x - clientRect.x;
    const y = event.y - clientRect.y;
  
    xDistance.set(x);
    yDistance.set(y);
  
    console.log(`x: ${x}, y: ${y}`); // Debugging
  };
  // const handleMouseMove = (event: MouseEvent) => {
  //   if (!ref.current) return;
  //   const clientReact = ref.current.getBoundingClientRect();

  //   xDistance.set(event.x - clientReact.x);
  //   yDistance.set(event.y - clientReact.y);
  // };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <Reveal duration={1.5}>
      <div
        className="relative
    flex gap-2 p-2 
    border-primary border 
    rounded-lg h-[46px]">

<motion.div
  ref={ref}
  className="absolute inset-0 border-2 border-purple-500 dark:border-purple-300 rounded-lg"
  style={{
    maskImage: mask,
    WebkitMaskImage: mask,
  }}
></motion.div>
        {/* <motion.div
          className="absolute
      inset-0 border-2 border-purple-500
      dark:border-purple-300 rounded-lg"
          style={{
            maskImage: mask,
            WebkitMaskImage: mask,
          }}></motion.div> */}

        <img src={icon} alt={`${name} icon`} />
        <p className="text-lg">{name}</p>
      </div>
    </Reveal>
  );
};
export default Skill;
