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
    jobTitle: ``,
    address: ``,
    postalCode: ``,
    driving: ``,
    nationality: ``,
    birthPlace: ``,
    birthDate: ``,
    linkedIn: ``,
  })
  const [employment, setEmployment] = useState([])
  const [education, setEducation] = useState([])
  const [skills, setSkills] = useState([])
  const [languanges, setLanguages] = useState([])
  const [courses, setCourses] = useState([])

  return (
    <CVInformation.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        employment,
        setEmployment,
        education,
        setEducation,
        skills,
        setSkills,
        languanges,
        setLanguages,
        courses,
        setCourses,
      }}
    >
      {children}
    </CVInformation.Provider>
  )
}
