import styled, { keyframes } from "styled-components";
import video from "./iris_complaints.mp4";

const CourseManagement = () => {
  return (
    <Container>
      <VideoSection>
        <StyledVideo src={video} controls autoPlay />
      </VideoSection>
      <ModuleTitle>HostelComplaints Module</ModuleTitle>
      <InfoSection>
        <AnimatedInfoText>
          Students no more need to go to the hostel office to give complaints
          about hostel or their room with the help of hostel complaints module
          students can fill complaints easily instead of going to hostel office.
        </AnimatedInfoText>
        <DesignersInfo>Module Designers: Salman Shah</DesignersInfo>
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
