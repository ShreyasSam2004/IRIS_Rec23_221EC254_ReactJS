import styled, { keyframes } from "styled-components";
import video from "./iris_hostel.mp4";

const CourseManagement = () => {
  return (
    <Container>
      <VideoSection>
        <StyledVideo src={video} controls autoPlay />
      </VideoSection>
      <ModuleTitle>HostelDashboard Module</ModuleTitle>
      <InfoSection>
        <AnimatedInfoText>
          The HostelDashboard allows students to get their hostel card and mess
          card . Before the HostelDashboard module students had to physically go
          to the office to get their mess and hostel cards with this module
          students can get to know information about their hostel rooms and mess
        </AnimatedInfoText>
        <DesignersInfo>
          Module Designers: Abhishek Kumar and Anirudh Prabhakaran
        </DesignersInfo>
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
