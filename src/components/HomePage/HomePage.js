import Button from "react-bootstrap/Button";
import "./HomePage.css";
import Resume from "../../assets/RadhikaJoshi_Resume.pdf";
import AboutPage from "../AboutPage/AboutPage";
import ExperiencePage from "../ExperiencePage/ExperiencePage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import ContactPage from "../ContactPage/ContactPage";

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
        <h2>Software Engineer</h2>
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
