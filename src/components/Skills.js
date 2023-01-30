import React from "react";
import skill1 from "../assets/c.png";
import skill2 from "../assets/csharp.png";
import skill3 from "../assets/swift.png";
import skill4 from "../assets/css.png";
import skill5 from "../assets/html.png";
import skill6 from "../assets/java.png";
import skill7 from "../assets/javascript.png";
import skill8 from "../assets/php.png";
import skill9 from "../assets/python.png";
import skill10 from "../assets/ruby.png";
const Skills = () => {
  const Skills = [
    {
      img: skill1,
      title: "C language",
      desc: "C language",
      pers:"70%"
    },
    {
      img: skill2,
      title: "CSHARP language",
      desc: "C SHARP",
      pers:"75%"
    },
    {
      img: skill3,
      title: "SWIFT language",
      desc: "SWIFT",
      pers:"85%"

    },
    {
      img: skill4,
      title: "CSS language",
      desc: "CSS",
      pers:"85%"
    },
    {
      img: skill5,
      title: "HTML language",
      desc: "HTML",
      pers:"90%"
    },
    {
      img: skill6,
      title: "JAVA language",
      desc: "JAVA",
      pers:"70%"
    },
    {
        img: skill7,
        title: "JAVA SCRIPT language",
        desc: "JAVA SCRIPT",
        pers:"80%"
      },
      {
        img: skill8,
        title: "PHP language",
        desc: "PHP",
        pers:"95%"
      },
      {
        img: skill9,
        title: "PYTHON language",
        desc: "PYTHON",
        pers:"70%"
      },
      {
        img: skill10,
        title: "RUBY language",
        desc: "RUBY",
        pers:"75%"
      },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="skills">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-300 pb-2">
            Skills
          </h2>

          <p className="pb-5">
            These are some of my Skills. 
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="Skills container mx-auto grid md:grid-cols-5 gap-10">
        {Skills.map((Skills, i) => {
          return (
            <div className="relative" key={i}>
              <img src={Skills.img} alt={Skills.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]    opacity-0 duration-500  flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {Skills.desc}
                  </p>
                  <p className="  font-bold" > {Skills.pers} </p>
                

                
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;