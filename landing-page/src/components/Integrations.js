import styled, { keyframes } from "styled-components";

const tools = [
    {
      name: "Moodle",
      description: "Open Source LMS Integration for courses",
      img: "https://cdn.iris.nitk.ac.in/about/img/moodle.png"
    },
    {
      name: "Google Apps for Education",
      description: "Providing student account benefits to all",
      img: "https://cdn.iris.nitk.ac.in/about/img/gfore.png"
    },
    {
      name: "Microsoft Teams",
      description: "Collaboration and Learning from home",
      img: "https://cdn.iris.nitk.ac.in/images/new_dashboard/teams.png"
    },
    {
      name: "NodeBB",
      description: "Meet like-minded users in an online Forum",
      img: "https://cdn.iris.nitk.ac.in/about/img/nodebb.png"
    },
    {
      name: "Hesk",
      description: "Help Desk Software with a Knowledge Base",
      img: "https://cdn.iris.nitk.ac.in/about/img/hesk.png"
    },
    {
      name: "BillDesk",
      description: "Integrate payment facilities",
      img: "https://cdn.iris.nitk.ac.in/about/img/billdesk.jpg"
    },
    {
      name: "Google and Microsoft oAuth",
      description: "Easy access to IRIS",
      img: "https://cdn.iris.nitk.ac.in/about/img/oauth.png"
    },
    {
      name: "Koha",
      description: "Library Platform used at NITK, now linked with IRIS",
      img: "https://cdn.iris.nitk.ac.in/about/img/koha.png"
    },
    {
      name: "SBI ePay",
      description: "Quick & Easy payment facility for customers on Merchant site",
      img: "https://cdn.iris.nitk.ac.in/about/img/sbiepay.jpg"
    },
    {
      name: "Sentry",
      description: "Application Monitoring to solve issues faster",
      img: "https://cdn.iris.nitk.ac.in/about/img/sentry.png"
    },
    {
      name: "BBB",
      description: "Watch and Record lectures",
      img: "https://cdn.iris.nitk.ac.in/about/img/bbb.jpeg"
    }
  ];
  
const Integrations = () => {
  return (
    <Container>
      <Title>THIRD PARTY INTEGRATIONS IMPLEMENTED ON IRIS</Title>
      <ToolsContainer>
        {tools.map((tool, index) => (
          <ToolCard key={index}>
            <ToolImage src={tool.img} alt={tool.name} />
            <ToolInfo>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </ToolInfo>
          </ToolCard>
        ))}
      </ToolsContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 40px;
  margin-top : 60px;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;



const ToolCard = styled.div`
  width: 200px;
  background-color: #f7f7f7;
  border: 1px solid transparent;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border: 6px solid #3F8585;
    transform: translateY(-5px);
  }
`;

const ToolImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ToolInfo = styled.div`
  padding: 15px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    color: #777;
    font-size: 0.9rem;
    animation: ${slideDown} 0.3s ease forwards;
    opacity: 0;
  }

  ${ToolCard}:hover & {
    opacity: 1;
  }
`;

export default Integrations;
