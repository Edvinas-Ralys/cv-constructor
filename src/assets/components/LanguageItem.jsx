import { useContext, useState } from "react"
import { DeleteIcon } from "./Icons"
import { CVInformation } from "./data/InformationCont"

function LanguageItem({ lang }) {
  const { setLanguages } = useContext(CVInformation)
  const [editCard, setEditCard] = useState(false)

  const deleteLang = _ => {
    setLanguages(prev => prev.filter(langInArr => langInArr.id !== lang.id))
  }

  return (
    <div className="lang-card">
      <div className="cont">
        <div onClick={_ => setEditCard(!editCard)} className="cont-title">
          {lang.text === `` ? `Not specified` : lang.text}
        </div>
        <div onClick={deleteLang} className="delete">
          {DeleteIcon}
        </div>
      </div>
      {editCard && (
        <div className="lang-edit">
          <div className="section">
            <div className="input">
              <label htmlFor="language">Language</label>
              <input
                type="text"
                value={lang.text}
                onChange={e =>
                  setLanguages(langsInArr =>
                    langsInArr.map(langInArr =>
                      langInArr.id === lang.id ? { ...langInArr, text: e.target.value } : langInArr
                    )
                  )
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageItem
