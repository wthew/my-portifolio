import styled from "styled-components";
import Img from "../../bg-me.jpg";

const Container = styled.img`
  opacity: 10%;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  z-index: -1;
`;

export default () => {
  return <Container src={Img} />
};
