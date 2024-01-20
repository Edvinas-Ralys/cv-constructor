import PersonalInfo from "./input/PersonalInfo"
import ProfesSummary from "./input/ProfesSummary"
import EmploymentList from "./input/EmploymentList"
import EducationList from "./input/EducationList"
import SkillList from "./input/SkillList"
import LanguageList from "./input/LanguageList"
import CoursesList from "./input/CoursesList"
import Footer from "./output/Footer"

function Input() {
  return (
    <div className="user-input">
      <PersonalInfo />
      <ProfesSummary />
      <EmploymentList />
      <EducationList />
      <SkillList />
      <LanguageList />
      {/* <CoursesList /> */}
      <Footer />
    </div>
  )
}

export default Input
