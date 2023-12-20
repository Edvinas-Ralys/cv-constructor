import "./assets/style/App.scss";
import "./assets/style/reset.scss";
import "./assets/style/button.scss";
import Preview from "./assets/components/Preview";
import Input from "./assets/components/Input";
import { useState } from "react";

function App() {
  const [name, setName] = useState(``);
  const handleName = (e) => {
    setName(e.target.value);
  };

  const [lastName, setLastName] = useState(``);
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const [title, setTitle] = useState(``);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const [email, setEmail] = useState(``);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [number, setNumber] = useState(``);
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const [country, setCountry] = useState(``);
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const [city, setCity] = useState(``);
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="main">

      <div className="sides">
        <Input
          name={name}
          handleName={handleName}
          lastName={lastName}
          handleLastName={handleLastName}
          title={title}
          handleTitle={handleTitle}
          email={email}
          handleEmail={handleEmail}
          number={number}
          handleNumber={handleNumber}
          country={country}
          handleCountry={handleCountry}
          city={city}
          handleCity={handleCity}
        />
        <Preview
          name={name}
          lastName={lastName}
          title={title}
          email={email}
          number={number}
          country={country}
          city={city}
        />
      </div>
    </div>
  );
}

export default App;
