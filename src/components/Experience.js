import React, { useState } from 'react';

const TimelineItem = ({ date, role, company, projects, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="timeline-item" data-aos="fade-up">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{company} ({date})</div>
      <div className="timeline-content collapsible">
        <button
          className="btn btn-sm btn-outline-light toggle-btn mb-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide Details" : "View Details"}
        </button>

        {isOpen && (
          <div>
            <h5 className="fw-bold">{role}</h5>
            {projects}
            <ul className="text-start">{details}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => (
  <div className="position-relative banner text-white overflow-hidden parallax" data-aos="fade-up">
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
    <div className="position-relative container" style={{ zIndex: 1 }}>
      <h2 className="text-center mb-5">
        <span role="img" aria-label="briefcase">💼</span> Work Experience
      </h2>

      <div className="timeline">
        <TimelineItem
          date="Nov 2023 – Present"
          role="Software Engineer & Associate Team Lead"
          company="Gamana Solutions LLP, Bangalore"
          projects={(
            <p>
              <strong>Projects:</strong>
              <a href="https://www.earthfields.in/" target="_blank" rel="noopener noreferrer" className="text-white ms-2 text-decoration-underline">
                Earthfields
              </a>
              , Sriharsha Biryani Delights
            </p>
          )}
          details={(
            <>
              <li>Developed robust web applications using .NET, .NET Core, C#, MVC, and ASP.NET Web Forms.</li>
              <li>Implemented optimized database solutions with MS SQL, ADO.NET & Entity Framework.</li>
              <li>Led a team, conducted code reviews, and mentored junior developers.</li>
              <li>Resolved real-time issues and streamlined development using Git.</li>
            </>
          )}
        />

        <TimelineItem
          date="Mar 2021 – Oct 2023"
          role="Associate Software Engineer"
          company="Emids Technologies Pvt Ltd, Bangalore"
          projects={(
            <p>
              <strong>Projects:</strong>
              <a href="https://www.greenwayhealth.com/" target="_blank" rel="noopener noreferrer" className="text-white ms-2 text-decoration-underline">
                Greenway Prime Suite
              </a>
              ,
              <a href="https://arc-staging.emids.com/" target="_blank" rel="noopener noreferrer" className="text-white ms-2 text-decoration-underline">
                Employee Portal ARC
              </a>
            </p>
          )}
          details={(
            <>
              <li>Developed apps using .NET Core, Web API, C#, Angular 9.</li>
              <li>Used SQL Server & EF to optimize backend performance.</li>
              <li>Collaborated on code reviews and ensured coding standards.</li>
              <li>Worked with version control systems like Git and TFS.</li>
            </>
          )}
        />
      </div>
    </div>
  </div>
);

export default Experience;