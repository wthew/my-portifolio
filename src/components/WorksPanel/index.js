import styled from "styled-components";
import { CardContainer, ButtonBar } from "../Card";

import "./index.css";
import Work1 from "../../work1.mp4";

const CustomCard = styled(CardContainer)`
  margin: auto;
  width: 75%;
  height: min-content;
  align-self: stretch;
  margin-bottom: 5rem;
`;

const WorksPanel = () => (
  <CustomCard>
    <ButtonBar title="some works" />

    <div className="slider">
      <div className="slides">
        <div className="slide-item">
          <div className="WorkContainer">
            {/* space */}
            <h1>Space Invaders like game</h1>
            <video autoPlay controls loop src={Work1} />
          </div>
        </div>
      </div>
    </div>
  </CustomCard>
);

export default WorksPanel