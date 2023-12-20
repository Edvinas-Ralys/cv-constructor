import Header from "./preview/Header";
function Preview({ name, lastName, title, email, number, country, city }) {
  return (
    <div className="preview-side">
      <Header
        name={name}
        lastName={lastName}
        title={title}
        email={email}
        number={number}
        country={country}
        city={city}
      />
    </div>
  );
}

export default Preview;
