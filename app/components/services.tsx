"use client";
import { ImMobile } from "react-icons/im";
import { BsGlobeAmericas } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoLogoDesignernews } from "react-icons/io5";
import { motion } from "framer-motion";
import { textVariant2 } from "../helpers/utils";
const services = [
  {
    title: "First feature",
    description:
      " Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.",
    link: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
  },
  {
    title: "Second feature",
    description:
      " Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.",
    link: "https://cdn-icons-png.flaticon.com/512/4341/4341134.png",
  },
  {
    title: "Third feature",
    description:
      " Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.",
    link: "https://cdn-icons-png.flaticon.com/512/4341/4341160.png",
  },
  {
    title: "fourth feature",
    description:
      " Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.",
    link: "https://cdn-icons-png.flaticon.com/512/4341/4341025.png",
  },
];

const servicesContent = {
  description:
    "We offer a wide range of software development services to help businesses and organizations achieve their goals.",
  main: "Empower your business with our cutting-edge",
  serviceOne: {
    main: "Web Development",
    description:
      " We develop custom web application tailored to your business needs. Our team of experienced developers uses the latest technologies to deliver robust, scalable, and secure software solutions.",
  },
  serviceTwo: {
    main: "Mobile Development",
    description:
      " If it is user-friendly mobile application you want then we can build it and make it secure while tailoring it to maximize sales..",
  },
  serviceThree: {
    main: "Desktop Development",
    description:
      "We use the latest technologies to create powerful desktop applications that are scalable, secure, and user-friendly. Our developers work closely with you to understand your business requirements, analyze your workflows, and design a solution that is aligned with your business goals.",
  },
  serviceFour: {
    main: "UI/UX Design",
    description:
      "Our designers work closely with your team to understand your business goals and create designs that align with your brand image, message, and values. We offer a range of design services, including wireframing, prototyping, and user testing, to ensure that your UI/UX design is both functional and aesthetically pleasing.",
  },
};

export default function Example() {
  return (
    <div className="relative my-8">
      <section className=" bg-slate-50 py-4">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-semibold uppercase mb-4 text-center tracking-wider  text-primaryTextColor ">
              <motion.span
                className=" bg-secondaryTextColor rounded-full  px-[8px] py-[2px] inline-block"
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
              >
                Services
              </motion.span>
            </h2>
            <div className="lg:flex justify-between items-center">
              <div className="lg:w-3/12" data-aos="fade-up" data-aos-delay="0">
                <h2 className="font-bold leading-tight mb-7 text-4xl text-gray-700">
                  {servicesContent.main}
                  <a className="text-teal-600 inline-block transition-all ease-in-out duration-300 hover:text-teal-700 relative hover:before:w-full before:z-0 before:bg-teal-600 before:transition-all before:ease-in-out before:duration-300 before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:content-[''] before:absolute">
                    software Solutions
                  </a>
                </h2>
                <p className="text-gray-500 mb-10 lg:mb-0">
                  {servicesContent.description}
                </p>
              </div>
              <div className="lg:w-8/12 md:flex gap-7">
                <div className="md:w-6/12">
                  <div data-aos="fade-up">
                    <div className="p-5 md:p-12 mb-7 bg-white rounded-md shadow-md transition-all ease-in-out duration-300 hover:shadow-2xl">
                      <BsGlobeAmericas className="my-2 text-4xl text-teal-500" />
                      <h3 className="text-xl mb-2 font-bold">
                        {servicesContent.serviceOne.main}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {servicesContent.serviceOne.description}
                      </p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="100">
                    <div className="p-5 md:p-12 mb-7 bg-white rounded-md shadow-md transition-all ease-in-out duration-300 hover:shadow-2xl">
                      <ImMobile className="my-2 text-4xl text-teal-500" />
                      <h3 className="text-xl mb-2 font-bold">
                        {servicesContent.serviceTwo.main}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {servicesContent.serviceTwo.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-6/12">
                  <div data-aos="fade-up" data-aos-delay="200">
                    <div className="p-5 md:p-12 mb-7 bg-white rounded-md mt-0 lg:mt-7 shadow-md transition-all ease-in-out duration-300 hover:shadow-2xl">
                      <HiOutlineComputerDesktop className="my-2 text-4xl text-teal-500" />
                      <h3 className="text-xl mb-2 font-bold">
                        {" "}
                        {servicesContent.serviceThree.main}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {servicesContent.serviceThree.description}
                      </p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300">
                    <div className="p-5 md:p-12 mb-7 bg-white rounded-md shadow-md transition-all ease-in-out duration-300 hover:shadow-2xl">
                      <IoLogoDesignernews className="my-2 text-4xl text-teal-500" />
                      <h3 className="text-xl mb-2 font-bold">
                        {" "}
                        {servicesContent.serviceFour.main}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {servicesContent.serviceFour.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
