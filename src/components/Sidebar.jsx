import styled from "styled-components";
import { BsTelegram, BsReddit, BsYoutube, BsWallet2 } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";

const Container = styled.div`
  position: fixed;
  top: 20%;
  margin-left: 2rem;
`;
const Wrapper = styled.div`
  & p {
    display: none;
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
