import "./App.css";

import { info } from "./me.json";
import { bio } from "./me.json";

import Background from "./components/Background";
import CodeCard from "./components/CodeCard";
import Chart from "./components/Chart";
import WorksPanel from "./components/WorksPanel";

const App = () => {
  const jsonText = JSON.stringify(info, undefined, 3);
  const BioText = bio.join("\n");

  return (
    <>
      <Background />
      <div className="App">
        <div className="main toEnd">
          <CodeCard title="info">{jsonText}</CodeCard>
        </div>
        <div className="main">
          <Chart bio={BioText} />
        </div>
        <div className="main">
          <WorksPanel />
        </div>
      </div>
    </>
  );
};

export default App;
