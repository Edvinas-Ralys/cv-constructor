import { useContext } from "react"
import { CVInformation } from "../data/InformationCont"
import CoursesItem from "./CoursesItem"
import { v4 as uuidv4 } from "uuid"

function CoursesList() {
  const { courses, setCourses } = useContext(CVInformation)
  const handleCourse = _ =>{
    setCourses(prev => [...prev, {title:``, institution:``, startDate:``, endDate:``, id:uuidv4()}])
    console.log(courses)
  }

  return (
    <div className="courses-input">
      <div className="title">Courses</div>
      <div className="input">
        <div className="courses-list">
          {courses.map((course, i) => (
            <CoursesItem key={i} course={course}  />
          ))}
        </div>
        <p onClick={handleCourse} className="aditional-click">
          {courses.length === 0 ? `+ Add course` : `+ Add one more course`}
        </p>
      </div>
    </div>
  )
}

export default CoursesList
