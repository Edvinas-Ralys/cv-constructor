import PersonalInfo from "./PersonalInfo"
import ProfesSummary from "./ProfesSummary"
import EmploymentList from "./EmploymentList"
import EducationList from "./EducationList"

function Input() {
  return (
    <div className="user-input">
      <PersonalInfo />
      <ProfesSummary />
      <EmploymentList />
      <EducationList />
    </div>
  )
}

export default Input
