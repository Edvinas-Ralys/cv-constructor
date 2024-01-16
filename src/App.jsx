import "./assets/style/App.scss"
import Input from "./assets/components/Input"
import { createContext, useContext, useEffect, useState } from "react"
import Output from "./assets/components/Output"
import DeleteEmplyment from "./assets/components/DeleteEmplyment"

export const InfoContext = createContext()

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: ``,
    surname: ``,
    email: ``,
    phoneNumber: ``,
    city: ``,
    country: ``,
    education: [],
  })
  const [deleteEmpl, setDeleteEmpl] = useState(null)
  const [employment, setEmployment] = useState([])


  return (
    <div className="main">
      <InfoContext.Provider
        value={[
          personalInfo,
          setPersonalInfo,
          deleteEmpl,
          setDeleteEmpl,
          employment,
          setEmployment,
        ]}
      >
        <Input />
        <Output />
        <DeleteEmplyment />
      </InfoContext.Provider>
    </div>
  )
}

export default App
