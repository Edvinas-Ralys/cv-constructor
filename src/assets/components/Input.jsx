import PersonalInfo from "./PersonalInfo"
import ProfesSummary from "./ProfesSummary"
import EmploymentList from "./EmploymentList"
import EducationList from "./EducationList"
import SkillList from "./SkillList"
import LanguageList from "./LanguageList"

function Input() {
  return (
    <div className="user-input">
      <PersonalInfo />
      <ProfesSummary />
      <EmploymentList />
      <EducationList />
      <SkillList />
      <LanguageList />
    </div>
  )
}

export default Input
