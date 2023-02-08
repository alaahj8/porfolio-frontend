import React, { useEffect, useState } from "react";
import AboutImg from "../assets/ahj1.png";

const About = () => {

  // eslint-disable-next-line no-unused-vars
  const [aboutArray, setAboutArray] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/api/about/about')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    setAboutArray(data)
  });
  }, [])
 




  
  return (
    <section className="bg-secondery text-white px-5 py-32 padding_add" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-300 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Ala'a Hijazi. I am a
            Frontend Developer. I build beautifull websites with <span className="text-accent">React</span> and
            <span className="text-accent">Tailwind CSS.
            </span></p>
          <p className="pb-5">
            I am proficient in  <span className="text-accent">React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3</span> and many more.
          </p>

          <p>In backend I know <span className="text-accent">Node.js, Express.js, MongoDB, and Mongoose</span></p>

          <p>
            In my free time I do blogs .
            Where I talk about programming.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;