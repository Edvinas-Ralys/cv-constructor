import { useContext } from "react"
import { CVInformation } from "../data/InformationCont"

function Address() {
  const { personalInfo } = useContext(CVInformation)
  return (
    <div className="address">
      {personalInfo.address !== `` || personalInfo.city !== `` || personalInfo.country !== `` ? (
        <div className="adress section">
          <div className="title">Adress</div>
          <div className="section-info">
            <p>{personalInfo.address}</p>
            <p>{personalInfo.city}</p>
            <p>{personalInfo.country}</p>
          </div>
        </div>
      ) : null}

      {personalInfo.email !== `` && (
        <div className="email section">
          <div className="title">Email</div>
          <div className="section-info">
            <p>{personalInfo.email}</p>
          </div>
        </div>
      )}
      {personalInfo.phoneNumber !== `` && (
        <div className="email section">
          <div className="title">Phone Number</div>
          <div className="section-info">
            <p>+{personalInfo.phoneNumber}</p>
          </div>
        </div>
      )}
      {personalInfo.birthDate !== `` || personalInfo.birthPlace !== `` ? (
        <div className="birth section">
          <div className="title">Date/Place of Birth</div>
          <div className="section-info">
            <p>
              {personalInfo.birthDate}
              {personalInfo.birthPlace !== `` && personalInfo.birthDate !== `` ? `, ` : null}
              {personalInfo.birthPlace}
            </p>
          </div>
        </div>
      ) : null}
      {personalInfo.driving !== `` && (
        <div className="driving section">
          <div className="title">Driving License</div>
          <div className="section-info">
            <p>{personalInfo.driving}</p>
          </div>
        </div>
      )}
      {personalInfo.nationality !== `` && (
        <div className="nationality section">
          <div className="title">Nationality</div>
          <div className="section-info">
            <p>{personalInfo.nationality}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Address
