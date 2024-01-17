import { createContext, useState } from "react"

export const CVInformation = createContext()

export const CVInformationProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: ``,
    surname: ``,
    email: ``,
    phoneNumber: ``,
    city: ``,
    country: ``,
    profSum: ``,
  })
  const [employment, setEmployment] = useState([])
  const [education, setEducation] = useState([])
  const [skills, setSkills] = useState([])

  return (
    <CVInformation.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        employment,
        setEmployment,
        education,
        setEducation,
      }}
    >
      {children}
    </CVInformation.Provider>
  )
}
