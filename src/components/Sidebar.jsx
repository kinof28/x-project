import styled from "styled-components";
import { BsTelegram, BsReddit, BsYoutube, BsWallet2 } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";

const Container = styled.div`
  position: fixed;
  top: 25%;
  margin-left: 0.8rem;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 0.5rem;
  height: max-content;
  & p {
    display: none;
    color: white;
    font-size: 1.1rem;
    border: 2px solid #ffffff2b;
    border-radius: 10px;
    padding: 0px 2rem;
    line-height: 3rem;
    margin-left: -1.2rem;
    z-index: -1;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  &:hover p {
    display: block;
  }
  & div {
    border: 2px solid #ffffff2b;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    background-color: black;
    color: #ffc107;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <BsTelegram />
        </div>
        <p>Telegram</p>
      </Wrapper>
      <Wrapper>
        <div>
          <IoLogoTwitter />
        </div>
        <p>Twitter</p>
      </Wrapper>
      <Wrapper>
        <div>
          <BsReddit />
        </div>
        <p>Reddit</p>
      </Wrapper>
      <Wrapper>
        <div>
          <BsYoutube />
        </div>
        <p>Youtube</p>
      </Wrapper>
      <Wrapper>
        <div>
          <BsWallet2 />
        </div>
        <p>Buy</p>
      </Wrapper>
    </Container>
  );
};
export default Sidebar;
