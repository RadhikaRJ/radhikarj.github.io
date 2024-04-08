import Button from "react-bootstrap/Button";
import "./HomePage.css";
import Resume from "../../assets/RadhikaJoshi_Resume.pdf";
import AboutPage from "../AboutPage/AboutPage";
import ExperiencePage from "../ExperiencePage/ExperiencePage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import ContactPage from "../ContactPage/ContactPage";

//npm run deploy after commiting and pushing the changes.
export default function HomePage() {
  const myStyle = {
    backgroundImage: `url(https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "95vh",
    width: "auto",
  };
  return (
    <>
      <div className="home" style={myStyle}>
        <h1>Radhika Joshi</h1>
        <h2>
          <strong>Software Engineer</strong>,{" "}
          <a href="https://www.credly.com/badges/e379b120-ac6d-42bc-a547-c4801c3e3df5/linked_in?t=s9usp3">
            <strong>AWS SAA-C03</strong>
          </a>
        </h2>
        <h2></h2>
        <Button
          className="resume-button"
          variant="dark"
          href={Resume}
          target="_blank"
        >
          View Resume
        </Button>{" "}
      </div>
      <AboutPage />

      <PortfolioPage />
      <ExperiencePage />
      <ContactPage />
    </>
  );
}
