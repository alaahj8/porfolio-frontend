import React, { useEffect, useState } from "react";
import HeroImg from "../assets/ahj.png";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [heroArray, setHeroArray] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/api/hero/hero')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    setHeroArray(data)
  });
  }, [])
  return (
    <section className="bg-primary px-5 text-white w-full padding_add">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">A</span>la'a <span className="text-accent">H</span>ijazi <br />
            Frontend Developer
          </h1>

          <p className="py-5">
            I am proficient in <span className="text-accent">JavaScript</span>, <span className="text-accent">React.js</span> and <span className="text-accent">Tailwind CSS</span>
          </p>

          <div className="flex py-5 ">
            <a
              href="https://twitter.com/A.hijazi8"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@A.hijazi8"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/A.hijazi8/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[transparent] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="A.hijazi"
            className="lgw-[80%] ml-auto"
          
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;