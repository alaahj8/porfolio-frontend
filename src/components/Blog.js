import React from "react";

const Blog = () => {
  const post = [
    {
      img: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/10/node4.png",
      title: "How to build a  app with Node.js and Express.js",
      url: "https://www.freecodecamp.org/news/build-six-node-js-and-express-js/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmgv0DwKLUCKM9I3FxqL48UajcXcAoMxsDA&usqp=CAU",
      title: "Top 15 Free API's",
      url: "https://apipheny.io/free-api/",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
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
        {post.map((item) => {
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

export default Blog;