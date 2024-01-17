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
    emplList: [],
  })
  const [deleteEmpl, setDeleteEmpl] = useState(null)
  const [employment, setEmployment] = useState([])

  return (
    <CVInformation.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        deleteEmpl,
        setDeleteEmpl,
        employment,
        setEmployment,
      }}
    >
      {children}
    </CVInformation.Provider>
  )
}
