import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto my-16 max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      {children}
    </section>
  );
};

export default SectionWrapper;
