import styled, { keyframes } from 'styled-components';
import video from './buy_and_sell.mp4';

const CourseManagement = () => {
  return (
    <Container>
      
      <VideoSection>
        <StyledVideo src={video} controls autoPlay />
      </VideoSection>
      <ModuleTitle>Buy and Sell Module</ModuleTitle>
      <InfoSection>
        <AnimatedInfoText>
           The Buy and Sell is an amazing module developed by the Web developers and product managers. It allows students to buy and sell necessary items theu need. Students no longer need to spend a lot of money on books as they can get it from their seniors through the buy and sell module. Students can also sell their necessary Products such as books,sports kit etc.

        </AnimatedInfoText>
        <DesignersInfo>Module Designers: Sushant Satesh Rao and Harshal Shende</DesignersInfo>
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
