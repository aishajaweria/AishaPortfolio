import 'animate.css';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import focusflow from "../assets/img/Focus Flow.jpeg";
import main from "../assets/img/main.jpeg";
import projImg1 from "../assets/img/pic1.png";
import projImg2 from "../assets/img/pic2.png";
import projImg3 from "../assets/img/pic3.png";
import spotify from "../assets/img/Spotify.jpeg";
import ui1 from "../assets/img/ui1.png";
import ui2 from "../assets/img/ui2.png";
import ui3 from "../assets/img/ui3.png";
import { MobileApp } from './MobileApp';
import { ProjectCard } from "./ProjectCard";
import { UICard } from "./UICard";

export const Projects = () => {

  const projects = [
    {
      title: "Social Media Platform",
      description: "Design & Development",
      imgUrl: projImg1,
      git:'https://github.com/aishajaweria/socialMedia'
    },
    {
      title: "Online Food Ordering App",
      description: "Design & Development",
      imgUrl: projImg2,
      git:'https://github.com/aishajaweria/InvoiceMaker',
    },
    {
      title: "Invoice Maker",
      description: "Design & Development",
      imgUrl: projImg3,
      git:"https://github.com/aishajaweria/OnlineFoodOrderApp",
    }
  ];
  const projectss = [
    {
      title: "Login & Register",
      description: "UI Design",
      imgUrl: ui1,
    },
    {
      title: "Weekly News Letter",
      description: "UI Design",
      imgUrl: ui2,
    },
    {
      title: "Food Ordering",
      description: "UI Design",
      imgUrl: ui3,
    }
  ];
  const Mobileprojects = [
    {
      title: "Spotify Clone App",
      description: "A music streaming app replicating Spotify's UI and core features, including song playback, playlists, and user authentication.",
      imgUrl: main,
      git:'https://github.com/Aisha-mfl/spotify-clone'
    },
     {
      title: "Spotify Clone App",
      description: "A music streaming app replicating Spotify's UI and core features, including song playback, playlists, and user authentication.",
      imgUrl: spotify,
      git:'https://github.com/Aisha-mfl/spotify-clone'
    },
    {
      title: "Focus Flow",
      description: "A productivity app that merges multiple tools like task management, Expense Tracker, and Meals into one unified interface for focused work.",
      imgUrl: focusflow,
      git:'https://github.com/Aisha-mfl/Focus-Flow',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Developed full-stack applications using React and Next.js, including social media platforms, food ordering systems, and invoicing tools. Demonstrated strong UI/UX design skills by creating intuitive interfaces for blogging platforms and user authentication systems.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile Apps</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectss.map((project, index) => {
                              return (
                                <UICard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                       <Tab.Pane eventKey="third">
                        <Row>
                          {
                            Mobileprojects.map((project, index) => {
                              return (
                                <MobileApp
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
