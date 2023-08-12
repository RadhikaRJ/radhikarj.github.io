import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css";
import Headshot from "../../assets/HeadShot.jpg";

export default function AboutPage() {
  return (
    <>
      <div id="about" className="about">
        <h1>About</h1>
        <div classname="about-container">
          <div className="container2-1">
            <Image
              className="headshot"
              src={Headshot}
              roundedCircle
              height={"300rem"}
              width={"300rem"}
              alt="Radhika Joshi"
            />
            <p>
              Hi, I'm Radhika Joshi, a Computer Science and Engineering Masters
              student at Santa Clara University, CA. Besides my enthusiasm for
              software and web application development, I delight in nature
              photography and practicing Yoga. Residing in Milpitas, CA, I'm
              actively pursuing SDE Fall 2023 internships and full-time roles.{" "}
            </p>
          </div>
          <div className="container2-2">
            <Card bg="light" border="light">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Languages
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Java, JavaScript, Python, C++, MySQL, HTML5, CSS
                </Card.Text>
              </Card.Body>
            </Card>

            <Card bg="light" border="light">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Frameworks
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  ReactJS, ExpressJS, Bootstrap, Spring MVC, SpringBoot,
                  Cucumber and Selenium, Adobe Campaign Client Console
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="light" border="light">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Technologies
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Hadoop, Apache Spark, Apache Kafka, Firebase, Heroku, MongoDB,
                  Oracle SQL Server, Tableau, GitLab, GitHub, Jira, Splunk,
                  Postman
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
