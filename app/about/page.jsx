import React from "react";

const Page = () => {
  return (
    <>
      <section className="py-20 md:pt-20 bg-slate-100 bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="block md:flex items-stretch gap-2 mb-2">
              <div
                className="w-full md:w-6/12 lg:w-4/12 mb-2 md:mb-0 md:order-2"
                data-aos="fade-in"
              >
                <img
                  className="max-w-full object-fill h-full w-full "
                  src="../../assets/img/person-2-min.jpg"
                  alt="freetailwindui.co"
                  data-aos="fade-in"
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-8/12">
                <div
                  className="bg-gray-800 p-10 relative z-10 h-auto md:h-full flex items-center lg:px-20"
                  data-aos="fade-in"
                  data-aos-delay="100"
                >
                  <div data-aos="fade-up" data-aos-delay="200">
                    <p className="text-white lg:text-2xl leading-loose italic mb-7">
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.”
                    </p>
                    <p className="mb-0">
                      <em className="text-white text-md text-opacity-100">
                        Wade Warren
                      </em>
                      <em className="text-white text-sm text-opacity-80 block">
                        CEO, Co-Founder,{" "}
                        <a
                          href="https://freetailwindui.co"
                          className="text-yellow-500 underline hover:no-underline hover:text-white"
                        >
                          freetailwindui.co
                        </a>
                      </em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:flex items-stretch gap-2">
              <div
                className="w-full md:w-6/12 lg:w-4/12 mb-2 md:mb-0"
                data-aos="fade-in"
                data-aos-delay="100"
              >
                <img
                  className="max-w-full object-fill h-full w-full "
                  src="../../assets/img/person-1-min.jpg"
                  alt="freetailwindui.co"
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-8/12">
                <div
                  className="bg-gray-800 p-10 relative z-10 h-auto md:h-full flex items-center lg:px-20"
                  data-aos="fade-in"
                  data-aos-delay="200"
                >
                  <div data-aos="fade-up" data-aos-delay="300">
                    <p className="text-white lg:text-2xl leading-loose italic mb-7">
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.”
                    </p>
                    <p className="mb-0">
                      <em className="text-white text-md text-opacity-100">
                        Jane Copper
                      </em>
                      <em className="text-white text-sm text-opacity-80 block">
                        CTO, Co-Founder,{" "}
                        <a
                          href="https://freetailwindui.co"
                          className="text-yellow-500 underline hover:no-underline hover:text-white"
                        >
                          freetailwindui.co
                        </a>
                      </em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
