import React, { useEffect, useState } from "react";
import blog1 from "../assets/node4.png";
import blog2 from "../assets/APIs.png";

const Blogs = () =>
 {
  // eslint-disable-next-line no-unused-vars
  const [blogsArray, setBlogsArray] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/api/blogs/blogs')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    setBlogsArray(data)
  });
  }, [])


  const Blogs = [
    {
      img: blog1,
      title: "How to build a  app with Node.js and Express.js",
      url: "https://www.freecodecamp.org/news/build-six-node-js-and-express-js/",
    },
    {
      img: blog2,
      title: "Top 15 Free API's",
      url: "https://apipheny.io/free-api/",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32 padding_add" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-300 pb-2">
            Blogs
          </h2>

          <p className="pb-5">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {Blogs.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};


export default Blogs;