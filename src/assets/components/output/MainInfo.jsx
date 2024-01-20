import Education from "./Education"
import Employment from "./Employment"
import Profile from "./Profile"

function MainInfo() {
  return (
    <div className="main-information">
        <Profile />
        <Employment />
        <Education />
    </div>
  )
}

export default MainInfo
