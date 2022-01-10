import { useState } from "react";
import styled, { keyframes } from "styled-components";

export const CardContainer = styled.div`
  justify-self: flex-end;
  margin: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 20px -5px black;
  padding-bottom: 2rem;

  width: min-content;
  max-width: 75%;

  font-size: 12px;
  backdrop-filter: blur(10px);
`;

const ButtonBarContainer = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const Circle = styled.div`
  background-color: ${(props) => props.color};
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-width: 2px;
  border-color: #0006;
  box-shadow: 0 0 10px -5px black;
  border-radius: 50%;
`;

const colorTitle = keyframes`
  0% { color: #f1fa8c; }
  50% { color: #bd93f9; }
  100% { color: #f1fa8c; }
`;

const Title = styled.div`
  display: flex;
  margin: 0 auto 0;
  padding: 0 2rem;
  font-family: monospace;
  font-weight: bolder;
  font-size: 14px;
  animation: ${colorTitle} 5s infinite ease-in-out;
`;

export const ButtonBar = (props) => (
  <ButtonBarContainer>
    <Circle color="#ff5555" onClick={() => props.onClose()} />
    <Circle color="#f1fa8c" onClick={() => props.onMaxim()} />
    <Circle color="#50fa7b" onClick={() => props.onMinim()} />
    <Title>{props.title}</Title>
  </ButtonBarContainer>
);

const Card = (props) => {
  const [isHidden] = useState(false);
  const [isMax] = useState(false);
  const [isMin] = useState(false);

  return (
    <CardContainer isHidden={isHidden} isMax={isMax} isMin={isMin} {...props}>
      {props.hideBtn ? <></> : <ButtonBar title={props.title} />}
      {props.children}
    </CardContainer>
  );
};

export default Card;
