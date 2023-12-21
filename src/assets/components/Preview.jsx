import Header from "./preview/Header";
function Preview({ basicMultiText}) {
  return (
    <div className="preview-side">
      <Header
        name={basicMultiText[0]}
        lastName={basicMultiText[1]}
        title={basicMultiText[2]}
        email={basicMultiText[3]}
        number={basicMultiText[4]}
        country={basicMultiText[5]}
        city={basicMultiText[6]}
      />
    </div>
  );
}

export default Preview;
