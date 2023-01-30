import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-black">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-300 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span>  <span className="text-accent">Hij.alaa8@gmail.com</span>
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span>  <span className="text-accent">+961 71330911</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;