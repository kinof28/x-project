import styled from "styled-components";
import CoinsPrice from "./CoinsPrice";

const Container = styled.div`
  margin-top: 4.97rem;
  background: linear-gradient(135deg, #000000, #010416);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Home = () => {
  return (
    <>
      <Container>
        <CoinsPrice />
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
      </Container>
    </>
  );
};
export default Home;
