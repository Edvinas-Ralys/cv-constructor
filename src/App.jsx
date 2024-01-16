import "./assets/style/App.scss"
import Input from "./assets/components/Input"
import { createContext, useContext, useEffect, useState } from "react"
import Output from "./assets/components/Output"

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


  useEffect(_=>{
    console.log(`changed`)
  }, [personalInfo])

  return (
    <div className="main">
      <InfoContext.Provider value={[personalInfo, setPersonalInfo]}>
        <Input />
        <Output />
      </InfoContext.Provider>
    </div>
  )
}

export default App
