"use client";
import React from "react";
import TabHeader from "./tab-header";
import SectionWrapper from "./section-wrapper";
import TestimonyCard from "./testimony-card";
import { motion } from "framer-motion";
import { footerVariants, textVariant2 } from "../helpers/utils";

const testimonies = [
  {
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet,  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    email: "@gmail.com",
    company: "MTN Ghana",
  },

  {
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    email: "@gmail.com",
    company: "MTN Ghana",
  },
  {
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporsunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    email: "@gmail.com",
    company: "MTN Ghana",
  },

  {
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    email: "@gmail.com",
    company: "MTN Ghana",
  },
  {
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetuecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    email: "@gmail.com",
    company: "MTN Ghana",
  },

  {
    author: "John Doe",
    content:
      "Lorem irehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    email: "@gmail.com",
    company: "MTN Ghana",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="section-bg py-4">
        <SectionWrapper>
          <TabHeader
            title={"Testimonials"}
            subtitle="what our customers are saying"
            description=" We take pride in the quality of our work and the relationships we build with our clients"
          />

          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4"
          >
            {testimonies.map((testimony: any, index) => {
              return (
                <div key={index} className="h-auto max-w-full">
                  <TestimonyCard
                    text={testimony.content}
                    author={testimony.author}
                    email={testimony.email}
                    company={testimony.company}
                  />
                </div>
              );
            })}
          </motion.div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Testimonial;
