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
  }
`;
const Button = styled.a``;

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
