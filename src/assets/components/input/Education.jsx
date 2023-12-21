import Chevron from "../../icons/Chevron"
import Plus from "../../icons/Plus"
import { useState } from "react"
import EducationList from "./EducationList"

function Education() {

    const [open, setOpen] = useState(false)
    const openDropdown = () => {
        setOpen(!open)
    }

  return (
    <div className={`education ${open? "active" : "inactive" }`}>
    <div className="education-title" onClick={openDropdown}>
        <h3>Education</h3>
        <Chevron />
    </div>
    <EducationList />
    <div className="add-education">

        <p >Add</p>
        <Plus />
    </div>
    <button onClick={openDropdown}>Save</button>
</div>
  )
}

export default Education
