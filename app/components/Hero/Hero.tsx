"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../Reveal";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center z-20 mx-auto md:flex-row md:gap-10 md:mx-10">
      {/* Left Section: Text Content */}
      <div className="flex flex-col gap-3 items-center text-center md:gap-8 md:my-14 md:text-start md:items-start">
        <Reveal initialX={-25}>
          <h1 className="text-2xl font-semibold md:text-4xl">
            Hello, I'm Muhammad Subhan Khan. I&#8217;m
            <span className="block text-3xl highlight mt-2 md:text-5xl md:inline md:mt-0">
              {" "}
              Tech Enthusiast
            </span>
          </h1>
        </Reveal>

        <Reveal initialX={-30} delay={0.2}>
          <p className="text-sm mx-6 md:text-xl md:mx-0">
            I&#8217;m obsessed with code and can help startups create unique and
            helpful products.
          </p>
        </Reveal>

        <Reveal initialX={-40} delay={0.4}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl"
            href="mailto:muhammadsubhan0712@gmail.com"
          >
            Let&#8217;s Connect
            <img src="/arrow_right_icon.svg" alt="Arrow right icon" />
          </motion.a>
        </Reveal>
      </div>

      {/* Right Section: Profile Image */}
      <div className="relative group mt-8 md:mt-0">
        <Reveal>
          {/* Background Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden md:block"
          >
            <Image
              src="/profile_light_purple.png"
              alt="Light purple rectangle"
              width={372}
              height={430}
              className="w-[372px] h-[430px] absolute right-0 top-0 -z-10 group-hover:scale-[102%] group-hover:-rotate-2 transition-transform duration-300 ease-in-out"
            />
            <Image
              src="/profile_dark_purple.png"
              alt="Dark purple rectangle"
              width={372}
              height={430}
              className="w-[372px] h-[430px] absolute right-0 top-0 -z-10 group-hover:scale-[102%] group-hover:rotate-2 transition-transform duration-300 ease-in-out"
            />
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden md:block"
          >
            <Image
              src="/profile_image.png"
              alt="My profile picture"
              width={357}
              height={417}
              className="min-w-[357px] min-h-[417px] z-10 mr-2 my-2 rounded-xl group-hover:scale-[102%] transition-transform duration-300 ease-in-out"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;