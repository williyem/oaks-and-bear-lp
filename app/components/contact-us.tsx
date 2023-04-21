"use client";
import React from "react";
import TabHeader from "./tab-header";
import SectionWrapper from "./section-wrapper";
import Image from "next/image";
import {
  CloudUploadIcon,
  InboxIcon,
  OfficeBuildingIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { MailIcon } from "@heroicons/react/solid";
import { footerNavigation } from "../helpers/ui-data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../helpers/utils";

interface statInterface {
  title: string;
  subTitle: string;
  content: string;
}

const stats = [
  {
    icon: MailIcon,
    subTitle: "Email",
    content: " oab@gmail.com",
  },

  {
    icon: PhoneIcon,
    subTitle: "Phone",
    content: "  +233 24 000 0000",
  },
  {
    icon: OfficeBuildingIcon,
    subTitle: "Office",
    content:
      "  1686, Geraldine Lane\n\
    New York, NY 10013",
  },
  {
    icon: CloudUploadIcon,
    subTitle: "Socials",
    content: "",
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
        className="py-4"
      >
        <SectionWrapper>
          <TabHeader
            title="Contact"
            subtitle="Let’s stay connected"
            description="We'd love to hear from you! Get in touch to share your feedback, ask questions, or discuss your project."
          />
          <div className="flex w-full justify-between h-[70vh]">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="basis-1/2 grid grid-cols-2 gap-12 justify-around content-center"
            >
              {stats.map((stat, index: number) => (
                <div key={index} className="text-start ">
                  <div>
                    <span className="inline-flex items-center mb-8 justify-center rounded-full  bg-primaryTextColor p-3 shadow-lg">
                      <stat.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="font-bold text-xl">{stat.subTitle}</h3>
                  <div className="text-gray-800 text-lg">
                    {stat.content || (
                      <div className="flex space-x-6 mt-4">
                        {footerNavigation.social.map((item: any) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-primaryTextColor hover:text-gray-500"
                          >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="basis-1/2 flex justify-center items-center"
            >
              <div className=" w-[90%]  relative p-8 py-10 bg-gray-50 shadow-sm rounded-md">
                <form>
                  <label
                    htmlFor="email"
                    className="block text-sm text-left font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-sm   border-2 border-gray-300 rounded-md"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="my-4">
                    <label
                      htmlFor="message"
                      className="block text-sm text-left font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 sm:text-sm min-h-14 resize-none  border-2 border-gray-300 rounded-md"
                        placeholder="your message"
                      />
                    </div>
                  </div>
                  <button className=" py-2 px-6 bg-primaryTextColor w-full text-white rounded-lg">
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </motion.div>
    </>
  );
};

export default AboutUs;
