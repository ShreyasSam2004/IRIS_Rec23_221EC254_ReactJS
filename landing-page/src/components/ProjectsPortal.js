import styled, { keyframes } from "styled-components";
import video from "./iris_projects.mp4";

const CourseManagement = () => {
  return (
    <Container>
      <VideoSection>
        <StyledVideo src={video} controls autoPlay />
      </VideoSection>
      <ModuleTitle>ProjectsPortal Module</ModuleTitle>
      <InfoSection>
        <AnimatedInfoText>
          The ProjectsPortal module is mainly focused on applying to projects
          under different professors . Before students were not aware of the
          projects available in NITK and they had to walk to the department in
          order to register for projects under professors with the projects
          portal module it has become easy for students to apply for different
          projects under different professors giving them a wide range of
          exposure
        </AnimatedInfoText>
        <DesignersInfo>Module Designers:Sushanth Sathesh Rao</DesignersInfo>
      </InfoSection>
    </Container>
  );
};

const slideRightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModuleTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  color: #fff;
`;

const VideoSection = styled.div`
  margin: 20px 0;
  width: 100%;
  max-height: 88vh;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoSection = styled.div`
  text-align: center;
  padding: 20px;
`;

const InfoText = styled.p`
  font-size: 1.2em;
  color: #77fffd;
`;

const DesignersInfo = styled.p`
  font-size: 1.2em;
  color: #77fffd;
`;

const AnimatedInfoText = styled(InfoText)`
  animation: ${slideRightAnimation} 1s ease-in-out forwards;
`;

export default CourseManagement;
