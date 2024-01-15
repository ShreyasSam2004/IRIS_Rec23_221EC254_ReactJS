import styled, { keyframes } from "styled-components";
import video from "./iris_timetable.mp4";

const CourseManagement = () => {
  return (
    <Container>
      <VideoSection>
        <StyledVideo src={video} controls autoPlay />
      </VideoSection>
      <ModuleTitle>TimeTable Module</ModuleTitle>
      <InfoSection>
        <AnimatedInfoText>
          The TimeTable module is a very useful module for the students as they
          can view their Timetable daily and see the slot timings this was
          created to make sure that students can keep a track on their daily
          classes so that they dont miss any classes.Students can view their
          respectieve course respresentatives and their course code
        </AnimatedInfoText>
        <DesignersInfo>Module Designers:Rakshith HR</DesignersInfo>
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
