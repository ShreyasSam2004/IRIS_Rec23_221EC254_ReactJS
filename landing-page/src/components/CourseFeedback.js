import styled, { keyframes } from 'styled-components';
import video from './iris_feedback.mp4';

const CourseManagement = () => {
  return (
    <Container>
      
      <VideoSection>
        <StyledVideo src={video} controls autoPlay />
      </VideoSection>
      <ModuleTitle>CourseFeedback Module</ModuleTitle>
      <InfoSection>
        <AnimatedInfoText>
          The Gyan module gives an insight into the ovreall placement statistics of NITK in all fields such as Civil services , MTech , BTech , MS in abroad and even MBA programs. This was created so that the students can get an insight into the placement procedures in NITK

        </AnimatedInfoText>
        <DesignersInfo>Module Designers: Akshay Revankar</DesignersInfo>
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
  color: #77FFFD;
`;

const DesignersInfo = styled.p`
  font-size: 1.2em;
  color: #77FFFD;
`;

const AnimatedInfoText = styled(InfoText)`
  animation: ${slideRightAnimation} 1s ease-in-out forwards;
`;

export default CourseManagement;
