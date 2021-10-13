import "./App.css";
import { useState } from "react";
import BarMenu from "./components/mennu";
import ButtonJustMobile from "./components/buttonMobile";
import HomepageFunction from "./components/homepage";
import DefinitionFunction from "./components/projectDefinition";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      {!selected && (
        <ButtonJustMobile setSelected={setSelected} selected={selected} />
      )}
      {!selected && <BarMenu setSelected={setSelected} selected={selected} />}
      {!selected && <HomepageFunction />}
      {selected && <DefinitionFunction setSelected={setSelected} />}
    </div>
  );
}

export default App;
