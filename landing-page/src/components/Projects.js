import React from "react";
import styled from "styled-components";

const projects = [
  {
    img: "https://cdn.iris.nitk.ac.in/about/img/gc.png",
    title: "NITK GC'13 Companion App",
    description: "Android App to accompany NITK Alumni at GC'13"
  },
  {
    img: "https://cdn.iris.nitk.ac.in/about/img/nitk.png",
    title: "NITK WEBSITE",
    description: "Official website of NITK Surathkal",
    url : ""
  },
  {
    img: "https://cdn.iris.nitk.ac.in/about/img/nitk.png",
    title: "Non-Teaching Staff Recruitment Portal",
    description: "Official portal for recruitment for Non-Teaching Staff"
  } ,
  {
    img: 	"https://cdn.iris.nitk.ac.in/about/img/cdc_logo.png",

    title: "Carrer development center website",
    description: "Official website of carrer development center NITK Surathkal"
  }
];
const Projects = () => {
    const handleProjectClick = (url) => {
      window.open(url, "_blank"); // Opens URL in a new tab
    };
  
    return (
      <Container>
        <SubHeader>PROJECTS UNDER TAKEN BY TEAM IRIS</SubHeader>
        <Header>Other Projects</Header>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index} onClick={() => project.url && handleProjectClick(project.url)}>
              <img src={project.img} alt={project.title} />
              <div>
                <h3>
                  {project.url ? ( // Checks if URL exists
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p>{project.description}</p>
              </div>
            </ProjectCard>
          ))}
        </ProjectsContainer>
      </Container>
    );
  };
  


const Container = styled.div`
  padding: 20px;
`;

const Header = styled.h1`
  font-weight: bold;
  color: #333;
  margin-bottom: 35px;
`;

const SubHeader = styled.h2`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 60px;
`;


const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const ProjectCard = styled.div`
  width: 220px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  img {
    width: 160px;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
    border-radius: 10px 10px 0 0;
  }

  div {
    padding: 20px;
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
    color: #333;
  }

  p {
    margin: 5px 0 0;
    color: #777;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default Projects;
