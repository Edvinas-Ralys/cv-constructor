import { useContext } from "react"
import { InfoContext } from "../../App"

function PersonalInfo() {
  // const personalInfo = useContext(InfoContext)
  // const setPersonalInfo = useContext(InfoContext)

  const [personalInfo, setPersonalInfo] = useContext(InfoContext)

  const clearPersonalInfo = _ => {
    setPersonalInfo(prev => ({
      ...prev,
      name: ``,
      surname: ``,
      email: ``,
      phoneNumber: ``,
      city: ``,
      country: ``,
    }))
  }

  return (
    <div className="personal-input">
      <div className="input">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={personalInfo.name}
            onChange={e => setPersonalInfo(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Name"
          />
        </div>
        <div className="surname">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            placeholder="Surname"
            value={personalInfo.surname}
            onChange={e => setPersonalInfo(prev => ({ ...prev, surname: e.target.value }))}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email"
            value={personalInfo.email}
            onChange={e => setPersonalInfo(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>
        <div className="phone-number">
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            value={personalInfo.phoneNumber}
            onChange={e => setPersonalInfo(prev => ({ ...prev, phoneNumber: e.target.value }))}
          />
        </div>
        <div className="city">
          <label htmlFor="city">City</label>
          <input
            type="text"
            value={personalInfo.city}
            onChange={e => setPersonalInfo(prev => ({ ...prev, city: e.target.value }))}
          />
        </div>
        <div className="country">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            value={personalInfo.country}
            onChange={e => setPersonalInfo(prev => ({ ...prev, country: e.target.value }))}
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={clearPersonalInfo}>Clear</button>
        <button>Save</button>
      </div>
    </div>
  )
}

export default PersonalInfo
