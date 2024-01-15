import styled, { keyframes } from 'styled-components';
import { useState , useEffect } from 'react';


const MoodlePage = () => {
    const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetOffset = document.getElementById('secondImage')?.offsetTop || 0;
      if (scrollPosition > targetOffset) {
        setShowSecondImage(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (

    <Container>
      <ImageSection>
        {/* Replace 'moodle-image.jpg' with your Moodle image URL */}
        <MoodleImage src={require('./moodleimg.png')} alt="Moodle" />
      </ImageSection>
      <InfoSection>
        <InfoHeader>Moodle Overview</InfoHeader>
        <InfoText>
          The Moodle platform serves as an effective tool for assignment submission.
          Students can utilize it to view their course plan, access study materials,
          and collaborate with peers and instructors.This was a game changer for the students because before they had to 
          contact teachers everytime for course plan . With moodle assignment submission was also made easier through online
          the students can aslo view their courses of all semesters.
        </InfoText>
      </InfoSection>
      <SecondImageSection id="secondImage" show={showSecondImage}>
        <SecondImage src={require('./moodleimg2.png')} alt="Second Image" />
      </SecondImageSection>

    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;


const ImageSection = styled.div`
  width: 100%;
  height: 88vh; /* Adjust the height of the image section as needed */
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out; /* Apply the animation */
  display: flex; /* Enable flexbox for image alignment */
  align-items: flex-start; /* Align image to the top */

`;

const MoodleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease-in-out; /* Apply the transition */
  
  &:hover {
    filter: brightness(90%); /* Example hover effect */
  }
`;


const InfoSection = styled.div`
  padding: 20px;
`;

const InfoHeader = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 1.2em;
  color: #77FFFD;
`;

const SecondImageSection = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease;
  /* Other styles for your second image section */
`;

const SecondImage = styled.img`
  width: 100%;
  height: 580px;
`;


export default MoodlePage;
