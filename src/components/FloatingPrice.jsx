import styled from "styled-components";
import bnbLogo from "../assets/bnb.png";

const Container = styled.div`
  display: flex;
  background: #00000094;
  position: fixed;
  align-items: center;
  justify-content: center;
  right: 10px;
  bottom: 10px;
  text-decoration: none;
  padding: 10px;
  z-index: 1;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  & img {
    width: 40px;
    margin-right: 5px;
  }
`;
const Wrapper = styled.div`
  color: white;
  & h4 {
    color: #f6bc08;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    transform: scaleY(0.9);
  }
  & p {
    margin: 0;
    font-weight: bold;
    font-size: 0.98rem;
  }
`;

const FloatingPrice = () => {
  const price = 317.146;
  return (
    <Container>
      <img src={bnbLogo} alt="BNB" />
      <Wrapper>
        <h4>BNB Price</h4>
        <p>${price}</p>
      </Wrapper>
    </Container>
  );
};
export default FloatingPrice;
