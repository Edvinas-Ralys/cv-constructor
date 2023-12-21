import React from 'react'
import { useState } from 'react'
import Chevron from '../../icons/Chevron'
import Plus from '../../icons/Plus'
import AddEducation from './AddEducation'
import {v4 as uuidv4} from 'uuid'

function Education({}) {
    const [open, setOpen] = useState(false)
    const openDropdown = () => {
        console.log(open)
        setOpen(!open)
    }

    const removeEducation = _ =>{
        console.log(`remove button pressed`)
        setAddEdu(prev => prev.filter(item => item[key] !== prev[key]))
    }
    const [addEdu, setAddEdu] = useState([])
    const addeducation = _ =>{
        setAddEdu(prev=> [...prev, <AddEducation key={uuidv4()} removeEducation={removeEducation}/>])
    }


  return (
    <div className={`education ${open? "active" : "inactive" }`}>
        <div className="education-title" onClick={openDropdown}>
            <h3>Education</h3>
            <Chevron />
        </div>
        {addEdu.map(item=> item)}
        <div onClick={addeducation} className="add-education">
            <p >Add</p>
            <Plus />
        </div>
        <button onClick={openDropdown}>Save</button>
    </div>
  )
}

export default Education
