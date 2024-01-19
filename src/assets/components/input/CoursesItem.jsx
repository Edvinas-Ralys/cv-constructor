import { useContext, useState } from "react"
import { DeleteIcon } from "../svgs/Icons"
import { CVInformation } from "../data/InformationCont"

function CoursesItem({ course }) {
  const [editCard, setEditCard] = useState(false)
  const { courses, setCourses } = useContext(CVInformation)

  const destroyCourse = _ => {
    setCourses(courses => courses.filter(courseInArr => courseInArr.id !== course.id))
  }

  return (
    <div className="course-card">
      <div className="cont">
        <div onClick={_ => setEditCard(!editCard)} className="cont-title">
          <p>{course.title === `` ? `Not specified` : course.title}</p>
          <p className="date">
            {course.startDate === `` ? `` : course.startDate}
            {course.endDate === `` ? `` : ` - ${course.endDate}`}
          </p>
        </div>
        <div onClick={destroyCourse} className="delete">
          {DeleteIcon}
        </div>
      </div>
      {editCard && (
        <div className="course-edit">
          <div className="section">
            <div className="course input">
              <label htmlFor="title">Course</label>
              <input
                type="text"
                id="title"
                value={course.title}
                onChange={e =>
                  setCourses(prev =>
                    prev.map(prevCourse =>
                      prevCourse.id === course.id
                        ? { ...prevCourse, title: e.target.value }
                        : prevCourse
                    )
                  )
                }
              />
            </div>
            <div className="institution input">
              <label htmlFor="inst">Institution</label>
              <input
                type="text"
                value={course.institution}
                onChange={e =>
                  setCourses(prev =>
                    prev.map(prevInst =>
                      prevInst.id === course.id
                        ? { ...prevInst, institution: e.target.value }
                        : prevInst
                    )
                  )
                }
              />
            </div>
          </div>
          <div className="section">
            <div className="dates-split input">
              <label className="dates">Start & End Data</label>
              <div className="date-inputs">
                <input
                  type="date"
                  value={course.startDate}
                  onChange={e =>
                    setCourses(prev =>
                      prev.map(prevDate =>
                        prevDate.id === course.id
                          ? { ...prevDate, startDate: e.target.value }
                          : prevDate
                      )
                    )
                  }
                />
                <input
                  type="date"
                  value={course.endDate}
                  onChange={e =>
                    setCourses(prev =>
                      prev.map(prevEndDate =>
                        prevEndDate.id === course.id
                          ? { ...prevEndDate, endDate: e.target.value }
                          : prevEndDate
                      )
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="buttons">
            <button onClick={_ => setEditCard(!editCard)}>Save</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CoursesItem
