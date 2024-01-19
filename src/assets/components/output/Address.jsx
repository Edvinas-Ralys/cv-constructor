import { useContext } from "react"
import { CVInformation } from "../data/InformationCont"


function Address() {

    const {personalInfo} = useContext(CVInformation)
  return (
    <div className="adress">
              {personalInfo.city}
      {personalInfo.country}

    </div>
  )
}

export default Address
