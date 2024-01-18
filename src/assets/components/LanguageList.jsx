import { useContext } from "react"
import { CVInformation } from "./data/InformationCont"
import LanguageItem from "./LanguageItem"
import { v4 as uuidv4 } from "uuid"


function LanguageList() {

    const addLanguage = _ =>{
        setLanguages(prev => [...prev, {text:``, id:uuidv4()}])
    }

    const { languanges, setLanguages } = useContext(CVInformation)

  return (
    <div className="lang-input">
        <div className="title">
            Languages
        </div>
        <div className="lang-list">
            {languanges.map((lang, i) => (
                <LanguageItem key={i} lang={lang} />
            ) )}
        </div>
        <p onClick={addLanguage} className="aditional-click">
        {languanges.length === 0 ? `+ Add language` : `+ Add one more languages`}
      </p>
    </div>
  )
}

export default LanguageList
