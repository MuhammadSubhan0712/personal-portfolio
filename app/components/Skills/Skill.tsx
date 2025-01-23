"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
type Props = {
  icon: string;
  name: string;
};

const Skill = ({ icon, name }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const xDistance = useMotionValue(0);
  const yDistance = useMotionValue(0);

  const handleMouseMove = (event: MouseEvent) => {
    if (!ref.current) return;
    const clientReact = ref.current.getBoundingClientRect();

    xDistance.set(event.x - clientReact.x);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative
    flex gap-2 p-2 
    border-primary border 
    rounded-lg h-[46px]">
      <motion.div
        className="absolute
      inset-0 border-2 border-purple-500
      dark:border-purple-300 rounded-lg"></motion.div>
      <img src={icon} alt={`${name} icon`} />
      <p className="text-lg">{name}</p>
    </div>
  );
};
export default Skill;
