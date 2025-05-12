import React from 'react';

const About = () => (
  <div
    className="position-relative banner text-white overflow-hidden parallax"
    data-aos="fade-up"
  >
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
    <div className="position-relative" style={{ zIndex: 1 }}>
      <h2 className="mb-4 text-center">
        <span role="img" aria-label="developer">
          👨‍💻
        </span>{" "}
        About Me
      </h2>
      <p className="fs-5">
        I'm a dedicated Full-Stack .NET Developer based in Bengaluru with a
        passion for clean code and robust application architecture. I specialize
        in developing secure and scalable web applications using ASP.NET Core,
        Angular, and SQL Server.
      </p>
      <p className="fs-5">
        Over the years, I've collaborated with cross-functional teams and led
        backend development initiatives for enterprise-grade platforms. When I'm
        not coding, you’ll find me at the gym, reading about business, or
        writing blogs about health, tech, and mindset.
      </p>
    </div>
  </div>
);

export default About;