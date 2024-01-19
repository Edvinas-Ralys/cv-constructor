import { useContext } from "react"
import { CVInformation } from "./data/InformationCont"
import Header from "./output/Header"
import Content from "./output/Content"


function Output() {

    const {personalInfo, setPersonalInfo} = useContext(CVInformation)

  return (

    <div className="output">
      <div className="output-display">
        <Header />
        <Content />

      </div>

    </div>
  )
}

export default Output
