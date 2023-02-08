import React, { useEffect, useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";


const Projects = () => {
  const [projectsArray, setProjectsArray] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/api/projects/projects')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    setProjectsArray(data)
  });
  }, [])
  // eslint-disable-next-line no-unused-vars
  const Projects = [
    {
      img: project1,
      title: "Project1",
      desc: "P1",
      live: "https://github.com/alaahj8/portfolio",
      code: "https://github.com/alaahj8/portfolio",
    },
    {
      img: project2,
      title: "Project2",
      desc: "P2",
      live: "https://github.com/alaahj8/portfolio",
      code: "https://github.com/alaahj8/portfolio",
    },
    {
      img: project3,
      title: "Project3",
      desc: "P3",
      live: "https://github.com/alaahj8/portfolio",
      code: "https://github.com/alaahj8/portfolio",
    },
    {
      img: project4,
      title: "Project4",
      desc: "P4",
      live: "https://github.com/alaahj8/portfolio",
      code: "https://github.com/alaahj8/portfolio",
    },
    {
      img: project5,
      title: "Project5",
      desc: "P5",
      live: "https://github.com/alaahj8/portfolio",
      code: "https://github.com/alaahj8/portfolio",
    },
    {
      img: project6,
      title: "Project6",
      desc: "P6",
      live: "https://github.com/alaahj8/portfolio",
      code: "https://github.com/alaahj8/portfolio",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32 padding_add" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-300 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with <span className="text-accent">React</span>,
            <span className="text-accent">MERN</span> and <span className="text-accent">vanilla CSS</span>. Check them out<span className="text-accent">!</span>
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projectsArray.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.image} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.name}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-gray-500 hover:bg-red-500 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-gray-500 hover:bg-blue-500 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;