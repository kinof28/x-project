import styled from "styled-components";
import { FiClipboard } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import CoinsPrice from "./CoinsPrice";

import Image3D from "../assets/3dlogo.png";

const Container = styled.div`
  background: linear-gradient(135deg, #000000, #010416);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-bottom: 2px solid #ffffff2b;
`;
const Margin = styled.div`
  height: 4.97rem;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  width: 85%;
  & img {
    flex: 1;
    padding: 1rem;
    object-fit: none;
  }
`;
const Section = styled.div`
  flex: 1;
  padding-right: 2.5rem;
  & h3 {
    text-transform: uppercase;
    font-size: 5rem;
    margin: 0;
    line-height: 1;
  }
  & span {
    display: inline-block;
    line-height: 1px;
    color: #f6bc08;
    text-shadow: 1px 1px 1px #092545;
    margin: 0;
  }
  & p {
    margin: 0;
    margin-bottom: 3rem;
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;
`;

const Contracter = styled.div`
  background: #25262d;
  padding: 8px 5px;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0px;
  border-radius: 10px;
  text-decoration: none;
  color: #f6bc09;
  border: 2px solid;
  position: relative;
  padding-right: 45px;
  transition: all 0.2s;
  overflow: hidden;
  width: 100%;
`;
const Icon = styled.div`
  position: absolute;
  background-color: #f6bc09;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  height: 100%;
  width: 2rem;
  font-size: 1.2rem;
`;
const Whitepaper = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background: linear-gradient(45deg, #ffc107, #c9a30e);
  padding: 0.375rem 0.75rem;
  font-size: 1.2rem;
  outline: none;
  border: 2px solid #cda50d;
  border-radius: 10px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
const Swap = styled.button`
  text-transform: uppercase;
  flex: 1;
  background: 0 0;
  color: #f6bc08;
  border-radius: 10px;
  padding: 0.375rem 0.75rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid #cda50d;
  & svg {
    margin-right: 5px;
    transform: scaleX(1.2);
  }
`;

const CardWrapper = styled.div``;
const Card = styled.div``;

const Home = (props) => {
  return (
    <>
      <Margin></Margin>
      <Container>
        <CoinsPrice />
        <Wrapper>
          <Section>
            <h3>
              <span>Xpro</span>ject
            </h3>
            <p>
              XPROJECT (XPRO Token) is a 100% Community Token created on the
              Binance Smart Chain network on June 01, 2022.
            </p>
            <Contracter>
              {props.wallet}
              <Icon>
                <FiClipboard />
              </Icon>
            </Contracter>
            <Buttons>
              <Whitepaper>
                <HiOutlineBookOpen />
                Whitepaper
              </Whitepaper>
              <Swap>
                <BiMoney /> Xpro Swap
              </Swap>
            </Buttons>
          </Section>
          <img src={Image3D} alt="XPROJECT" />
        </Wrapper>
      </Container>
      <Container>
        <CardWrapper>
          <Card>
            <img src="" alt="" />
            <h5>XPRO Price</h5>
            <span>[BNB]</span>
            <p>0.0000000000000947BNB</p>
          </Card>
          <Card>
            <img src="" alt="" />
            <h5>XPRO Price</h5>
            <span>[BNB]</span>
            <p>0.0000000000000947BNB</p>
          </Card>
          <Card>
            <img src="" alt="" />
            <h5>XPRO Price</h5>
            <span>[BNB]</span>
            <p>0.0000000000000947BNB</p>
          </Card>
          <Card>
            <img src="" alt="" />
            <h5>XPRO Price</h5>
            <span>[BNB]</span>
            <p>0.0000000000000947BNB</p>
          </Card>
          <Card>
            <img src="" alt="" />
            <h5>XPRO Price</h5>
            <span>[BNB]</span>
            <p>0.0000000000000947BNB</p>
          </Card>
          <Card>
            <img src="" alt="" />
            <h5>XPRO Price</h5>
            <span>[BNB]</span>
            <p>0.0000000000000947BNB</p>
          </Card>
        </CardWrapper>
      </Container>
    </>
  );
};
export default Home;
