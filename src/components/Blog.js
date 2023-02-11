import React, { useEffect, useState } from "react";

const Blogs = () =>
 {
  // eslint-disable-next-line no-unused-vars
  const [blogsArray, setBlogsArray] = useState([])
  useEffect(() => {
    fetch('https://backend-jl1j.onrender.com/api/blogs/blogs')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    setBlogsArray(data)
  });
  }, [])

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
        {blogsArray.map((item) => {
          return (
            <div>
              <img src={item.image} alt={item.name} />
              <h3 className="py-5 text-2xl">{item.name}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[transparent] text-white px-6 py-3 hover:bg-transparent"
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