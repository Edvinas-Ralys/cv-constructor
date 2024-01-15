import { useContext } from "react"
import { InfoContext } from "../../App"


function Output() {

    const [personalInfo, setPersonalInfo] = useContext(InfoContext)

  return (
    <div>
      <p>Name: {personalInfo.name}</p>
      <p>Surname: {personalInfo.surname}</p>
      <p>Email: {personalInfo.email} </p>
      <p>Phone Number: {personalInfo.phoneNumber}</p>
      <p>City: {personalInfo.city}</p>
      <p>Country: {personalInfo.country}</p>
    </div>
  )
}

export default Output
