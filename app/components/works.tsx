import TabHeader from "./tab-header";
import SectionWrapper from "./section-wrapper";
import ProjectTile from "./project-tile";

const projects = [
  {
    name: "Coinexus",
    description:
      "Provides users with a comprehensive suite of tools for buying, selling, and managing their cryptocurrency assets..",
    imgUrl: "./app2.jpg",
    url: "#",
  },
  {
    name: "Vizionary",
    description:
      " A platform for data visualization and ability to communicate complex ideas in a simple and intuitive way.",
    imgUrl: "./app3.jpg",
    url: "#",
  },
  {
    name: "Skillverse",
    description:
      "A platform that offers a variety of skills-based courses, from business and marketing to coding and technology.",
    imgUrl: "./app4.jpg",
    url: "#",
  },
  {
    name: "TravelEase",
    description:
      " A platform that offers users a range of travel options at affordable prices, with a focus on ease and convenience",
    imgUrl: "./app5.jpg",
    url: "#",
  },
];

const Works = () => {
  return (
    <>
      <div className="py-4">
        <SectionWrapper>
          <TabHeader
            title={"Projects"}
            subtitle="what we have delivered"
            description="Our projects are built to scale and designed with the user in mind. Take a look!"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-col-4 my-4 justify-items-center gap-4">
            {projects.map((project, index) => {
              return <ProjectTile key={index} data={project} />;
            })}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Works;
