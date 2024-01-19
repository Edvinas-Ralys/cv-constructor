import { createContext, useState } from "react"

export const CVInformation = createContext()

export const CVInformationProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: `Edvinas`,
    surname: `Ralys`,
    email: `edvinas.ralys97@gmail.com`,
    phoneNumber: `112`,
    city: `Kaunas`,
    country: `Lithuania`,
    profSum: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Est velit egestas dui id ornare arcu odio ut.`,
    jobTitle: `JS`,
    address: `Pasiles g`,
    postalCode: `55965`,
    driving: `Big`,
    nationality: `Lithuanian`,
    birthPlace: `Lyduvenai`,
    birthDate: `1997-01-05`,
    linkedIn: `yes`,
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
