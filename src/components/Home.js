import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => (
  <div
    className="position-relative banner text-white overflow-hidden parallax"
    data-aos="fade-up"
  >
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>

    <div className="position-relative" style={{ zIndex: 1 }}>
      <h1 className="display-4 fw-bold mb-3">
        <span role="img" aria-label="waving hand">
          👋
        </span>{" "}
        Hi, I'm <span className="text-info">Binayak Sahoo</span>
      </h1>
      <h4 className="text-light mb-3">
        <Typewriter
          words={[
            ".NET Developer",
            "Angular Enthusiast",
            "Full-Stack Engineer",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h4>
      <p className="lead mb-4">
        Building modern, secure, and scalable web apps with 4+ years of
        experience.
      </p>
      <a
        href={process.env.PUBLIC_URL + "/Resume Binayak.pdf"}
        className="btn btn-outline-light mt-4 px-4 py-2"
        download
      >
        <span role="img" aria-label="document">
          📄
        </span>{" "}
        Download Resume
      </a>
    </div>
  </div>
);

export default Home;