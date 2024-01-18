import { useContext } from "react"
import { DeleteIcon } from "./Icons"
import { CVInformation } from "./data/InformationCont"

function LanguageItem({ lang }) {

    const {setLanguages} = useContext(CVInformation)

    const deleteLang = _ =>{
        setLanguages(prev => prev.filter(langInArr => langInArr.id !== lang.id))
    }


  return (
    <div className="lang-card">
      <div className="cont">
        <div className="cont-title">{lang.text === `` ? `Not specified` : lang.text}</div>
        <div onClick={deleteLang} className="delete">
          {DeleteIcon}
        </div>
      </div>
    </div>
  )
}

export default LanguageItem
