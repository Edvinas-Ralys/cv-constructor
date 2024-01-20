import { useContext } from "react"
import { CVInformation } from "../data/InformationCont"

function Profile() {
  const { personalInfo } = useContext(CVInformation)

  return (
    <div className="profile">
      {personalInfo.profSum !== `` && <p className="title">Profile</p>}

      <div className="profile-text">{personalInfo.profSum}</div>
    </div>
  )
}

export default Profile
