import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Title>HAVE SOMETHING TO DISCUSS?</Title>
        <ContactMethods>
          <ContactMethod>
            <MailText>Mail Us</MailText>
          </ContactMethod>
        </ContactMethods>
        <Button href="mailto:IRISTEAM@NITK.EDU.IN">IRISTEAM@NITK.EDU.IN</Button>
        <MailAddress>
          NITK Surathkal, NH 66, Srinivas Nagar, Surathkal, Mangaluru, Karnataka 575025
        </MailAddress>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://cdn.iris.nitk.ac.in/about/img/bg-img/cta.jpg");
  background-size: cover;
  filter: brightness(50%);
  z-index: -1;
`;

const Content = styled.div`
  text-align: center;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: white;
  margin-bottom: 15px;
`;

const ContactMethods = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const MailIcon = styled.div`
  /* Use an icon or an image for the mail icon */
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin-right: 10px;
`;

const MailText = styled.p`
  font-size: 1.2em;
  color: white;
  font-weight: bold;
`;

const MailAddress = styled.p`
  font-size: 1.2em;
  color: white;
  font-weight: bold;
  margin-top: 30px;
`;

const Button = styled.a`
  display: block;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

// Media Query for iPhone or mobile devices
const mediaQuery = (maxWidth) => `
  @media (max-width: ${maxWidth}px) {
    ${Button} {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

// Apply the media query styles
const iPhoneMediaQuery = mediaQuery(480);

export default Contact;
