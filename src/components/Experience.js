import React from 'react';

const Experience = () => (
  <div
    className="position-relative banner text-white overflow-hidden parallax"
    data-aos="fade-up"
  >
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
    <div className="position-relative container" style={{ zIndex: 1 }}>
      <h2 className="text-center mb-5">
        <span role="img" aria-label="briefcase">
          💼
        </span>{" "}
        Work Experience
      </h2>

      <div className="timeline">
        {/* Gamana Solutions */}
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Nov 2023 – Present</div>
          <div className="timeline-content collapsible">
            <button
              className="btn btn-sm btn-outline-light toggle-btn mb-2"
              onClick={(e) => {
                const content = e.target.nextSibling;
                content.style.display =
                  content.style.display === "none" ? "block" : "none";
              }}
            >
              View Details
            </button>

            <div>
              <h5 className="fw-bold">
                Software Engineer & Associate Team Lead
              </h5>
              <p className="mb-1">Gamana Solutions LLP, Bangalore</p>
              <p>
                <strong>Projects:</strong>
                <a
                  href="https://www.earthfields.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white ms-2 text-decoration-underline"
                >
                  Earthfields
                </a>
                , Sriharsha Biryani Delights
              </p>
              <ul className="text-start">
                <li>
                  Developed robust web applications using .NET, .NET Core, C#,
                  MVC, and ASP.NET Web Forms.
                </li>
                <li>
                  Implemented optimized database solutions with MS SQL, ADO.NET
                  & Entity Framework.
                </li>
                <li>
                  Led a team, conducted code reviews, and mentored junior
                  developers.
                </li>
                <li>
                  Resolved real-time issues and streamlined development using
                  Git.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emids Technologies */}

        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Mar 2021 – Oct 2023</div>
          <div className="timeline-content collapsible">
            <button
              className="btn btn-sm btn-outline-light toggle-btn mb-2"
              onClick={(e) => {
                const content = e.target.nextSibling;
                content.style.display =
                  content.style.display === "none" ? "block" : "none";
              }}
            >
              View Details
            </button>

            <div>
              <h5 className="fw-bold">Associate Software Engineer</h5>
              <p className="mb-1">Emids Technologies Pvt Ltd, Bangalore</p>
              <p>
                <strong>Projects:</strong>
                <a
                  href="https://www.greenwayhealth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white ms-2 text-decoration-underline"
                >
                  Greenway Prime Suite
                </a>
                ,
                <a
                  href="https://arc-staging.emids.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white ms-2 text-decoration-underline"
                >
                  Employee Portal ARC
                </a>
              </p>
              <ul className="text-start">
                <li>Developed apps using .NET Core, Web API, C#, Angular 9.</li>
                <li>Used SQL Server & EF to optimize backend performance.</li>
                <li>
                  Collaborated on code reviews and ensured coding standards.
                </li>
                <li>Worked with version control systems like Git and TFS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
