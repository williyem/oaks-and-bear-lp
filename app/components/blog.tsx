"use client";
import { fadeIn, planetVariants, staggerContainer } from "../helpers/utils";
import TabHeader from "./tab-header";
import { motion } from "framer-motion";

const incentives = [
  {
    name: "Fast Delivery",
    imageSrc: "./delivery-scooter-svgrepo-com.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "1 year warranty",
    imageSrc: "./product-warranty-term-svgrepo-com.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Weekly Updates",
    imageSrc: "./update-svgrepo-com.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

export default function Example() {
  return (
    <div className="">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-7xl mx-auto py-4 sm:px-2 sm:py-32 lg:px-4"
      >
        <div className="text-center mb-4">
          <TabHeader title="About us" subtitle="" description="" />
        </div>
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                We are a team of experienced developers dedicated to creating
                innovative solutions
              </h2>
              <p className="mt-4 text-gray-500">
                Our passion for technology drives us to deliver exceptional
                results for our clients.Our approach is client-focused, and we
                prioritize clear communication throughout the development
                process.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src={"./about-us.jpg"}
                alt=""
                className="object-center object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3"
          >
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="w-16 h-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
