import styled, { keyframes } from 'styled-components';
import yourVideo from './iris_academics.mp4';

const CourseManagement = () => {
  return (
    <Container>
      
      <VideoSection>
        <StyledVideo src={yourVideo} controls autoPlay />
      </VideoSection>
      <ModuleTitle>Course Management Module</ModuleTitle>
      <InfoSection>
        <AnimatedInfoText>
          The Course Management module provides a comprehensive platform for students to manage their courses, including registration, grades, attendance, and more. Before students had to contact their instructor personally for their grades and attendance, but with this module, it is very easy to access all of them.
        </AnimatedInfoText>
        <DesignersInfo>Module Designers: Akshay Revankar and Nirmal Khedkar</DesignersInfo>
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
