import React from 'react';

const Skills = () => (
  <div
    className="position-relative banner text-white overflow-hidden parallax"
    data-aos="fade-up"
  >
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
    <div className="position-relative" style={{ zIndex: 1 }}>
      <h2 className="mb-4 text-center">
        <span role="img" aria-label="tools">
          🛠
        </span>{" "}
        Technical Skills
      </h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">
                <span role="img" aria-label="computer">
                  💻
                </span>{" "}
                Programming Languages & Web
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">.NET, .NET Core, C#</li>
                <li className="list-group-item">T-SQL, JavaScript</li>
                <li className="list-group-item">HTML5, CSS3, Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">
                <span role="img" aria-label="gear">
                  🧰
                </span>{" "}
                Frameworks & Tools
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  ASP.NET MVC, ASP.NET Core Web API
                </li>
                <li className="list-group-item">
                  Angular 9, Entity Framework, ADO.NET
                </li>
                <li className="list-group-item">SQL Server, MySQL</li>
                <li className="list-group-item">
                  Visual Studio, SSMS, GIT, TFS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
