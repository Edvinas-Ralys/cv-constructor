import { useContext } from "react"
import { CVInformation } from "../data/InformationCont"

function Languages() {
  const { languanges } = useContext(CVInformation)

  return (
    <>
      {languanges.length !== 0 && (
        <div className="languages">
          <div className="title">Languages</div>
          {languanges.map((item, i) => (
            <div className="language" key={i}>
              {item.text}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Languages
