"use client";
import React from "react";
import TabHeader from "./tab-header";
import SectionWrapper from "./section-wrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../helpers/utils";

interface statInterface {
  title: string;
  subTitle: string;
  content: string;
}

const stats: statInterface[] = [
  {
    title: "12.0",
    subTitle: "Projects Completed",
    content:
      " This metric shows the number of successful projects the company has completed for clients",
  },

  {
    title: "99%",
    subTitle: "Client Satisfaction Rate",
    content:
      "This metric shows the percentage of satisfied clients who have given positive feedback about the company's services",
  },
  {
    title: "+50.000",
    subTitle: "Hours Saved",
    content: "This metric shows the number of hours saved by clients",
  },
  {
    title: "4.0",
    subTitle: "Years of Experience",
    content: " This metric highlights the company's longevity in the industry.",
  },
];

const AboutUs = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-white py-4"
      >
        <SectionWrapper>
          <TabHeader
            title="Stats"
            subtitle="We Are OAKS & BEAR"
            description={
              "Our Stats section showcases our company's success, experience, and expertise in the software engineering industry"
            }
          />
          <div className="flex w-full justify-between h-[70vh]">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="basis-1/2 grid grid-cols-2 gap-12 justify-around content-center text-primaryTextColor"
            >
              {stats.map((stat: statInterface, index: number) => (
                <div key={index} className="text-center ">
                  <h1 className="font-bold  text-[48px]">{stat.title}</h1>
                  <h3 className="font-bold text-black text-xl">
                    {stat.subTitle}
                  </h3>
                  <p className="text-gray-800 text-lg">{stat.content}</p>
                </div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="basis-1/2 flex justify-center items-center"
            >
              <div className=" w-[90%] h-[80%] relative">
                <Image
                  src={"/laptop.png"}
                  alt=""
                  fill={true}
                  className="rounded-md"
                />
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </motion.div>
    </>
  );
};

export default AboutUs;
