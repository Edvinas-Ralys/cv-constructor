import PersonalInfo from "./PersonalInfo"
import ProfesSummary from "./ProfesSummary"
import EmploymentList from "./EmploymentList"
import EducationList from "./EducationList"
import SkillList from "./SkillList"

function Input() {
  return (
    <div className="user-input">
      <PersonalInfo />
      <ProfesSummary />
      <EmploymentList />
      <EducationList />
      <SkillList />
    </div>
  )
}

export default Input
