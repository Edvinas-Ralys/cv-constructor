import BasicInfo from "./input/BasicInfo";

function Input({
  name,
  handleName,
  lastName,
  handleLastName,
  handleTitle,
  email,
  handleEmail,
  number,
  handleNumber,
  country,
  handleCountry,
  city,
  handleCity

}) {
  return (
    <div className="input-side">
      <BasicInfo
        name={name}
        handleName={handleName}
        lastName={lastName}
        handleLastName={handleLastName}
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
    </div>
  );
}

export default Input;
