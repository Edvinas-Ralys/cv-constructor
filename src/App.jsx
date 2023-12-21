import "./assets/style/App.scss";
import "./assets/style/reset.scss";
import "./assets/style/button.scss";
import Preview from "./assets/components/Preview";
import Input from "./assets/components/Input";
import { useState } from "react";

function App() {
  const [basicMultiText, setBasicMultiText] = useState([``, ``, ``, ``, ``, ``, ``])
  const handleMultiText = (e, index) =>{
    console.log(`name` + basicMultiText[0])
    setBasicMultiText(prev => prev.map((item, i) => i === index ? e.target.value : item))
  }

  return (
    <div className="main">

      <div className="sides">
        <Input
          basicMultiText={basicMultiText}
          handleMultiText={handleMultiText}
        />

        <Preview
          basicMultiText={basicMultiText}

        />
      </div>
    </div>
  );
}

export default App;
