import { Link } from 'react-router-dom'; // Make sure you have React Router installed and configured for routing
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaptop,
    faPlaceOfWorship,
    faTasks,
    faBook,
    faBookReader,
    faClone,
    faCertificate,
    faCalendar,
    faShoppingCart,
    faHotel,
    faBell
  } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
      name: "Moodle",
      description: "Open Source LMS Integration for courses"
    },
    {
      name: "Buy and Sell",
      description: "Managing the lifecycle of research scholars"
    },
    {
      name: "Gyan",
      description: "Experience of NITK Students & Alumni"
    },
    {
      name: "Projects Portal",
      description: "Look out for available projects to apply for"
    },
    {
      name: "Course Management",
      description: "Course Registration, Grading, Attendance"
    },
    {
      name: "Hostel Dashboard",
      description: "Displaying the Details of Hostel and Mess"
    },
    {
      name: "Hostel Complaints",
      description: "Submitting student complaints about hostles and their rooms"
    },
    {
      name: "Course Feedback",
      description: "Providing Feedback to Course Instructors"
    },
    {
      name: "Academic Certificates",
      description: "Online application & generation of Academic Certificates"
    },
    {
      name: "Timetable",
      description: "View Courses, Track Quizzes, Stay Ahead of Deadlines"
    }
  ];
  
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

const getIcon = (serviceName) => {
    switch (serviceName) {
      case 'Moodle':
        return <FontAwesomeIcon icon={faLaptop} />;
      case 'Buy and Sell':
        return <FontAwesomeIcon icon={faShoppingCart} />;
      case 'Gyan':
        return <FontAwesomeIcon icon={faPlaceOfWorship} />;
      case 'Projects Portal':
        return <FontAwesomeIcon icon={faTasks} />;
      case 'Course Management':
        return <FontAwesomeIcon icon={faBook} />;
      case 'Hostel Dashboard':
        return <FontAwesomeIcon icon={faHotel} />;
      case 'Hostel Complaints':
        return <FontAwesomeIcon icon={faBell} />;
      case 'Course Feedback':
        return <FontAwesomeIcon icon={faClone} />;
      case 'Academic Certificates':
        return <FontAwesomeIcon icon={faCertificate} />;
      case 'Timetable':
        return <FontAwesomeIcon icon={faCalendar} />;
      default:
        return null;
    }
  };
  

const Modules = () => {
  return (
    <Container>
      <HeaderSection>
        <SmallHeader>Iris Features</SmallHeader>
        <BigHeader>Module</BigHeader>
      </HeaderSection>

      <ServicesContainer>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <Link to={`/${service.name.toLowerCase()}`}>
              <ServiceIcon>{getIcon(service.name)}</ServiceIcon>
              <ServiceName>{service.name}</ServiceName>
              <ServiceDescription>{service.description}</ServiceDescription>
            </Link>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const SmallHeader = styled.h2`
  font-size: 1.5em;
  opacity: 0.5;
  margin-top:20px;
`;

const BigHeader = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: #fff:

`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

const ServiceCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 250px;
  }

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2em;
  margin-bottom: 10px;
`;

const ServiceName = styled.h3`
  font-size: 1.5em;
`;

const ServiceDescription = styled.p`
  font-size: 1.2em;
  color: #777;
`;

export default Modules;
