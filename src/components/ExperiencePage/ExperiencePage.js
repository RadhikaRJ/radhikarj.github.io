import "./ExperiencePage.css";

export default function ExperiencePage() {
  return (
    <>
      <div id="experience" className="experience">
        <h1>Experience</h1>
        <div className="experience-container">
          <div>
            <h2>AWS Certified Solution Architect Associate (AWS SAA C03)</h2>
          </div>
          <div>
            <h2>Graduate Research Assistant- DBIS Lab</h2>
            <p>Santa Clara University, CA</p>
            <p>July 2023 to present</p>
            <ul>
              <li>
                Compared popular Big Data Management Systems on query scheduling
                and resource management techniques to identify current
                challenges and enhancement opportunities.
              </li>
              <li>
                Submitted a vision paper to the IEEE Big Data Conference 2023.
              </li>
            </ul>
          </div>
          <div>
            <h2>Software Engineer</h2>
            <p>TIAA - Pune, India</p>
            <p>July 2018 - April 2022</p>
            <ul>
              <li>
                Contributed to a JAVA based service to abstract customer
                communication tools from all TIAA financial products, resulting
                in better communication experience and 60% improvement in
                operational efficiency through unified monitoring and alerting.
                <li>
                  Worked on a real time communication preference update feature
                  that led to 20% decrease in the communications volume.
                </li>
                <li>
                  {" "}
                  Worked on a data monitoring system to track changes in user
                  subscription preferences and send alerts when it led to email
                  volume change beyond a certain threshold. This provided
                  business with valuable insights into impact of customer
                  decisions and helped identify and fix bugs in the ETL
                  pipeline.
                </li>
              </li>
              <li>
                Worked on a RESTful service to trigger ETL pipelines for
                pre-processing and storing communications preference data.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
