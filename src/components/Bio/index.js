import styled, { keyframes } from "styled-components";
import CardBase from "../Card";

import { FaGithub, FaInstagram } from "react-icons/fa";

const Card = styled(CardBase)`
  width: max-content;
`;

const TextContainer = styled.span`
  color: #f8f8f2;
  font-size: 16px;
  padding: 0.5rem;
  white-space: pre-line;
`;

const ColorIcons = keyframes`
0% { color: #ff79c6; }
50% { color: #50fa7b; }
100% { color: #ff79c6; }
`;
const LinksConttainer = styled.div`
  font-size: 48px;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 1rem;
  padding-bottom: 0;
  justify-content: space-evenly;
`;

const Link = styled.a`
  animation: ${ColorIcons} ${(props) => props.timeAnimation}s infinite;
`;

const BioCard = (props) => {
  return (
    <Card title="bio">
      <TextContainer>{props.children}</TextContainer>

      <LinksConttainer>
        {/* <Link target="_blank" href="https://www.instagram.com/__the.w__/" timeAnimation={10 * Math.random()}>
          <FaInstagram />
        </Link> */}
        <Link target="_blank" href="https://github.com/wthew" timeAnimation={10 * Math.random()}>
          <FaGithub />
        </Link>
      </LinksConttainer>
    </Card>
  );
};

export default BioCard;
