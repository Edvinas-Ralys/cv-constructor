import "./assets/style/App.scss"
import Input from "./assets/components/Input"
import Output from "./assets/components/Output"
import { CVInformationProvider } from "./assets/components/data/InformationCont"

function App() {
  return (
    <div className="main">
      <CVInformationProvider>
        <Input />
        <Output />
      </CVInformationProvider>
    </div>
  )
}

export default App
