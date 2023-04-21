"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "../helpers/utils";
interface tabHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}
const TabHeader = ({
  title = "title here!",
  subtitle = "Everything you need to know about what we offer",
  description = "  Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsa  in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id  viverra nulla.",
}: tabHeaderProps) => {
  return (
    <>
      <h2 className="text-sm font-semibold uppercase tracking-wider  text-primaryTextColor ">
        <motion.span
          className=" bg-secondaryTextColor  rounded-full px-[8px] py-[2px] inline-block"
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
        >
          {title}
        </motion.span>
      </h2>
      <motion.p
        className="mt-2 text-3xl font-extrabold capitalize tracking-tight text-gray-900 sm:text-4xl"
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
      >
        {subtitle}
      </motion.p>
      <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        {description}
      </p>
    </>
  );
};

export default TabHeader;
