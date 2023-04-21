import Image from "next/image";
import React from "react";

interface testimonyProps {
  text: string;
  author: string;
  email: string;
  company: string;
}
const TestimonyCard = ({ text, author, email, company }: testimonyProps) => {
  return (
    <>
      <div className="group relative cursor-pointer overflow-hidden bg-white px-4 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-4">
        {/* <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[20]"></span> */}
        <div className="relative z-10 mx-auto max-w-md">
          <div className="flex">
            <span className="grid relative h-16 w-16 place-items-center rounded-full bg-sky-500 transition-all duration-300 border border-gray-100 ">
              <Image
                alt="profile"
                src={"/profile.avif"}
                fill={true}
                className="rounded-full"
              />
            </span>
            <div className="mx-4 text-sm font-semibold text-left">
              <h1 className="text-primaryTextColor transition-all duration-300 ">
                {author}
              </h1>
              <p>{email}</p>
            </div>
          </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 ">
            <p>{`"${text}"`}</p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a
               
                className="text-secondary transition-all duration-300 "
              >
                {company}
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default TestimonyCard;
