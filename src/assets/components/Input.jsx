
import PersonalInfo from "./PersonalInfo"
// import { InfoContext } from "../../App"
// import { useContext } from "react"
// import Educations from "./Educations"
import ProfesSummary from "./ProfesSummary"
import EmploymentList from "./EmploymentList"


function Input() {



  return (
    <div className="user-input">
        <PersonalInfo />
        <ProfesSummary />
        <EmploymentList />
        {/* <Educations /> */}
    </div>
  )
}

export default Input
