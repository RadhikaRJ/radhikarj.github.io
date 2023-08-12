import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./PortfolioPage.css";
import imageGallery from "../../assets/ImageGalleryProject.png";
import videoLibrary from "../../assets/VideoLibraryProject.png";
import uiElegance from "../../assets/UIEleganceProject.png";

export default function PortfolioPage() {
  return (
    <>
      <div id="portfolio" className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio-container">
          <Card bg="light">
            <Card.Img
              variant="top"
              src={imageGallery}
              alt="Image Gallery Application"
            />
            <Card.Body>
              <Card.Title>MobileShots: Image Gallery Application</Card.Title>
              <Card.Text>
                Server-less full-stack ReactJS application with connection to a
                Cloud Firestore database. Functionality includes creating a
                bucket to store images, authenticating and managing users,
                implementing client-side routing with React-Router V6. Finally
                the React SPA is deployed using Firebase Hosting.
              </Card.Text>
              <div className=" card-button-container">
                <Button
                  variant="primary"
                  href="https://firestock-a5cda.web.app/"
                  target="_blank"
                  style={{ margin: "0.2rem" }}
                >
                  Visit
                </Button>
                <Button
                  variant="secondary"
                  href="https://github.com/RadhikaRJ/Image_Gallery"
                  target="_blank"
                  style={{ margin: "0.2rem" }}
                >
                  Github
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card bg="light">
            <Card.Img
              variant="top"
              src={videoLibrary}
              alt="Video Library Application"
            />
            <Card.Body>
              <Card.Title>Baghbani: Gardening Video Library App</Card.Title>
              <Card.Text>
                Built with ReactJS, Baghbani is a video library application
                created for gardening related videos with functionalities such
                as login and logout, create, display and delete playlist,
                add/delete from playlist, add to watch later & mark as
                favourite.
              </Card.Text>
              <div className="card-button-container">
                <Button
                  variant="primary"
                  href="https://rj-baghbaani.netlify.app/favorites"
                  target="_blank"
                  style={{ margin: "0.2rem" }}
                >
                  Visit
                </Button>
                <Button
                  variant="secondary"
                  href="https://github.com/RadhikaRJ/videolibrary/tree/development"
                  target="_blank"
                  style={{ margin: "0.2rem" }}
                >
                  Github
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card bg="light">
            <Card.Img
              variant="top"
              src={uiElegance}
              alt="UIElegance: A UI Component Library"
            />
            <Card.Body>
              <Card.Title>UIElegance: A UI Component Library </Card.Title>
              <Card.Text>
                A CSS HTML library that provides all the building blocks you
                need to design your web application.
              </Card.Text>
              <div className="card-button-container">
                <Button
                  variant="primary"
                  href="https://rj-uielegance.netlify.app/avatar/avatar"
                  target="_blank"
                  style={{ margin: "0.2rem" }}
                >
                  Visit
                </Button>
                <Button
                  variant="secondary"
                  href="https://github.com/RadhikaRJ/UIElegance/tree/development"
                  target="_blank"
                  style={{ margin: "0.2rem" }}
                >
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
