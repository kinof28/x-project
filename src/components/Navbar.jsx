import styled from "styled-components";

import LogoImage from "../assets/logo-s.png";

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  border-bottom: 1px solid grey;
`;
const Logo = styled.div`
  & img {
    height: 3rem;
  }
`;

const Wrapper = styled.div`
  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
    height: 100%;
  }
  & a {
    text-decoration: none;
    color: white;
    padding: 0px 1rem;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;
const Button = styled.a`
  color: #00062a;
  background: linear-gradient(45deg, #ffc107, #c9a30e);
  padding: 1rem !important;
  border-radius: 10px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Navbar = (props) => {
  return (
    <Container>
      <Logo>
        <a href="http://localhost:3000/">
          <img src={LogoImage} alt="XPROJECT | XPRO Token" />
        </a>
      </Logo>
      <Wrapper>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#social">Social</a>
          </li>
          <Button
            href={
              "https://pancakeswap.finance/swap?outputCurrency=" + props.wallet
            }
          >
            Buy Now
          </Button>
        </ul>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
