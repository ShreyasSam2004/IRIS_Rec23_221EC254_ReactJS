import styled from "styled-components";

const StatsSection = () => {
  return (
    <Container>
      <StatBox>
        <h3>8y</h3>
        <p>Years of Experience</p>
      </StatBox>
      <StatBox>
        <h3>23k+</h3>
        <p>Users</p>
      </StatBox>
      <StatBox>
        <h3>82M+</h3>
        <p>Users</p>
      </StatBox>
      <StatBox>
        <h3>37</h3>
        <p>Processes Digitized</p>
      </StatBox>
      {/* Exclude the fifth box */}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  gap: 25px;
`;

const StatBox = styled.div`
  width: 300px;
  height: 140px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.8rem;
    font-weight: bold;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

export default StatsSection;
