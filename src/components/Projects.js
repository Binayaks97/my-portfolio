import React from 'react';

const Projects = () => (
  <div
    className="position-relative banner text-white overflow-hidden parallax"
    data-aos="fade-up"
  >
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
    <div className="position-relative container" style={{ zIndex: 1 }}>
      <h2 className="text-center mb-5">
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
        Projects
      </h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">
                <span role="img" aria-label="earth">
                  🌍
                </span>{" "}
                Earthfields
              </h5>
              <p className="card-text">
                Full-stack web app for real estate listings and transactions.
              </p>
              <a
                href="https://www.earthfields.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <span role="img" aria-label="globe">
                  🌐
                </span>{" "}
                Visit Site
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">
                <span role="img" aria-label="hospital">
                  🏥
                </span>{" "}
                Greenway – Prime Suite
              </h5>
              <p className="card-text">
                Clinic management suite for patient appointments and records.
              </p>
              <a
                href="https://www.greenwayhealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <span role="img" aria-label="globe">
                  🌐
                </span>{" "}
                Visit Site
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">
                <span role="img" aria-label="team">
                  👥
                </span>{" "}
                Emids ARC Portal
              </h5>
              <p className="card-text">
                Internal employee portal with leave tracking and payroll.
              </p>
              <a
                href="https://arc-staging.emids.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <span role="img" aria-label="globe">
                  🌐
                </span>{" "}
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;