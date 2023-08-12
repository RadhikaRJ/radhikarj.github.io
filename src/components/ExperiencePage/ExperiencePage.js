import "./ExperiencePage.css";

export default function ExperiencePage() {
  return (
    <>
      <div id="experience" className="experience">
        <h1>Experience</h1>
        <div className="experience-container">
          <div>
            <h2>Graduate Research Assistant- DBIS Lab</h2>
            <p>Santa Clara University, CA</p>
            <p>July 2023 to present</p>
            <ul>
              <li>
                Engaged as part of the Databases and Information Systems (DBIS)
                Lab, we are actively involved in extensive research concerning
                query scheduling and resource management within the realm of big
                data management systems.
              </li>
              <li>
                Discovering an innovative method that leverages contemporary
                technological progress, testing its practical application, and
                disseminating the findings through publication constitute
                significant achievements of this research endeavor.
              </li>
              <li>
                Viewed from an industrial standpoint, this research opportunity
                opens a pathway to gain comprehensive insights into the
                fundamental technology, methodologies, and algorithms essential
                for the successful implementation of various big data and
                database management systems.
              </li>
            </ul>
          </div>
          <div>
            <h2>Software Engineer- Quality Assurance Analyst</h2>
            <p>TIAA - Pune, India</p>
            <p>July 2018 - April 2022</p>
            <ul>
              <li>
                Worked with Adobe Campaign Client Console tool and performed
                validation of the entire campaign across communication channels
                (Email, SMS, Web UI & Push Notifications) leading to a
                significant rise in onboarding new customers and enhancing
                existing customer engagement.
              </li>
              <li>
                Increased operational efficiency by automating REST API
                testing.(Cucumber BDD Framework, Selenium)
              </li>
              <li>
                Performed functional testing, integration testing, system
                testing, data validation, Web UI & UAT Testing, Dark-Live mode
                Validation, A/B Testing, suppression and rule based validation
                for major, minor and warranty releases.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
