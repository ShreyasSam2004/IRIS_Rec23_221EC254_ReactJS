import React, { useState } from "react";
import {styled,css} from "styled-components";

const leads = [
    {
      name: "Akshay",
      designation: "Founder and Team Lead (2017-18)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/akshayrvnkr.jpg",
      linkedin : "https://www.linkedin.com/in/akshayrevankar/"
    },
    {
      name: "Salman Shah",
      designation: "Tech Lead (2018-19)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/salman-bhai.jpg",
      linkedin : "https://www.linkedin.com/in/sbshah97/"
    },
    {
      name: "Manish Kumar",
      designation: "Admin Lead (2018-19)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/manish-kumar.jpg",
      linkedin : "https://www.linkedin.com/in/bmanishkumar/"
    },
    {
      name: "Govind Jeevan",
      designation: "Team Lead (2019-20)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/govind.jpg",
      linkedin : "https://www.linkedin.com/in/govindjeevan/"
    },
    {
      name: "Pavan Haresh",
      designation: "Team Lead (2019-20)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/pavan.jpg",
      linkedin : "https://www.linkedin.com/in/akshayrevankar/"
    },
    {
      name: "Vithik Shah",
      designation: "Tech Lead (2020-21)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/vithikshah.jpg",
      linkedin : "https://www.linkedin.com/in/vithik-shah-8642ab174/"
    },
    {
      name: "Shashank S",
      designation: "Admin Lead (2020-21)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/shashanks.jpg",
      linkedin : "https://www.linkedin.com/in/shashank-s-540bb7176/"
    },
    {
      name: "Abhishek Kumar",
      designation: "Tech Lead (2021-22)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/abhishekkumar2718.jpg",
      linkedin : "https://www.linkedin.com/in/akshayrevankar/"
    },
    {
      name: "Harsh Vardhan Jain",
      designation: "Admin Lead (2021-22)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/harsh.jain.jpg",
      linkedin : "https://www.linkedin.com/in/harshjain0016/"
    },
    {
      name: "Sushanth Sathesh Rao",
      designation: "Tech Lead (2022-23)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/raosush.jpg",
      linkedin : "https://www.linkedin.com/in/sushanth-rao-998578132/"
    },
    {
      name: "Guhan Sidharth",
      designation: "Admin Lead (2022-23)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/guhan1410.jpg",
      linkedin : "https://www.linkedin.com/in/guhan-sidharth-m-b92043208/"
    },
    {
      name: "Parth Mittal",
      designation: "Tech Lead (2023-24)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/parthmittal.jpg",
      linkedin : "https://www.linkedin.com/in/mittal-parth/"
    },
    {
      name: "Danish Juneja",
      designation: "Admin Lead (2023-24)",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/danish.jpg",
      linkedin : "https://www.linkedin.com/in/danish-juneja-11aa08197/"
    }
  ];
  

const web = [
    {
      name: "Head of Maintenance",
      designation: "Head of Maintenance",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/hrushikesh.jpg"
    },
    {
      name: "R S Muthukumar",
      designation: "Web Lead",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/muthukumar.jpg"
    },
    {
      name: "Vedant Anup Tarale",
      designation: "Web Lead",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/vedantT.jpg"
    },
    {
      name: "Kalluru Arif",
      designation: "Developer",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/kalluruArif.jpg"
    },
    {
      name: "Keerthi Bhushan M",
      designation: "Developer",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/keerthi.jpg"
    },
    {
      name: "Harshit Gupta",
      designation: "Developer",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/harshitgupta.jpg"
    },
    {
      name: "Aditya Agrawal",
      designation: "Developer",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/adityaagr.jpg"
    }
  ];

  const app = [
    {
      name: "Shashank S M",
      description: "App Lead",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/shashankSM.jpg"
    },
    {
      name: "Anirudh V Gubbi",
      description: "Developer",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/gubbi.jpg"
    },
    {
      name: "K Vinit Puranik",
      description: "Developer",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/vinitP.jpg"
    },
    {
      name: "Yuvraj Wale",
      description: "Developer",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/yuvrajwale.jpg"
    },
    {
      name: "Shashank G",
      description: "Developer",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/shashankg.jpg"
    },
    {
      name: "Abhishek Satpathy",
      description: "Developer",
      img: "https://cdn.iris.nitk.ac.in/images/new-authors/abhisheksat.jpg"
    }
  ];
  


  const TeamInfo = () => {
    const [selectedTeam, setSelectedTeam] = useState(leads);
  
    const toggleTeam = (team) => {
      setSelectedTeam(team);
    };
  
    return (
      <Container>
        <Header>Meet Our Incredible Team</Header>
        <Options>
          <Option onClick={() => toggleTeam(leads)} active={selectedTeam === leads}>
            Leads
          </Option>
          <Option onClick={() => toggleTeam(web)} active={selectedTeam === web}>
            Web
          </Option>
          <Option onClick={() => toggleTeam(app)} active={selectedTeam === app}>
            App
          </Option>
        </Options>


        <TeamContainer
          slideFromRight={selectedTeam === web || selectedTeam === app || selectedTeam === leads}
          slideFromApp={selectedTeam === app}
        >
          {selectedTeam.map((member, index) => (
            <TeamCard key={index}>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={member.img} alt={member.name} />
              </a>
              <div>
                <h3>{member.name}</h3>
                <p>{member.designation}</p>
                {selectedTeam === app && <p>{member.description}</p>}
              </div>
            </TeamCard>
          ))}
        </TeamContainer>
      </Container>
    );
  };
  
  
  
  
  const Container = styled.div`
    padding: 20px;
  `;
  
  const Header = styled.h1`
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 60px;
  `;
  
  const Options = styled.div`
    display: flex;
    justify-content: center;
    gap: 52px;
    margin-bottom: 60px;
    margin-top : 40px;
  `;
  
  const Option = styled.button`
    padding: 10px 20px;
    font-size: 1em;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    ${({ active }) =>
      active &&
      css`
        background-color: #555;
      `}
  
    &:hover {
      background-color: #555;
    }
  `;
  
  const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  ${({ slideFromRight }) =>
    slideFromRight &&
    css`
      animation: slideRight 0.5s forwards;
    `}

  ${({ slideFromApp }) =>
    slideFromApp &&
    css`
      animation: slideFromApp 0.5s forwards;
    `}

  @media (min-width: 768px) {
    gap: 40px;
  }

  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes slideFromApp {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;



const TeamCard = styled.div`
  width: 200px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  img {
    width: 150px;
    height: 170px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
    border-radius: 10px 10px 0 0;
  }

  div {
    padding: 20px;
    background-color: #fff;
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
    color: #333;
  }

  p {
    margin: 5px 0 0;
    color: #777;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default TeamInfo;
