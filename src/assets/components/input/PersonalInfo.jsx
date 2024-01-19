import { useContext, useState } from "react"
import { CVInformation } from "../data/InformationCont"

function PersonalInfo() {
  const { personalInfo, setPersonalInfo } = useContext(CVInformation)

  const [aditionalInfo, setAditionalInfo] = useState(false)

  return (
    <div className="personal-input info-section">
      <div className="title">Personal information</div>
      <div className="inputs">
        <div className="job-title input">
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            id="job-title"
            value={personalInfo.jobTitle}
            onChange={e => setPersonalInfo(prev => ({ ...prev, jobTitle: e.target.value }))}
          />
        </div>
        <div className="section">
          <div className="name input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={personalInfo.name}
              onChange={e => setPersonalInfo(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Name"
            />
          </div>
          <div className="surname input">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              placeholder="Surname"
              value={personalInfo.surname}
              onChange={e => setPersonalInfo(prev => ({ ...prev, surname: e.target.value }))}
            />
          </div>
        </div>
        <div className="section">
          <div className="email input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              value={personalInfo.email}
              onChange={e => setPersonalInfo(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div className="phone-number input">
            <label htmlFor="phone">Phone number</label>
            <input
              type="number"
              value={personalInfo.phoneNumber}
              onChange={e => setPersonalInfo(prev => ({ ...prev, phoneNumber: e.target.value }))}
            />
          </div>
        </div>
        <div className="section">
          <div className="city input">
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={personalInfo.city}
              onChange={e => setPersonalInfo(prev => ({ ...prev, city: e.target.value }))}
            />
          </div>
          <div className="country input">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              value={personalInfo.country}
              onChange={e => setPersonalInfo(prev => ({ ...prev, country: e.target.value }))}
            />
          </div>
        </div>
        {aditionalInfo && (
          <div className="aditional-information inputs">
            <div className="section">
              <div className="adress input">
                <label htmlFor="adress">Adress</label>
                <input
                  type="text"
                  name=""
                  id="adress"
                  value={personalInfo.address}
                  onChange={e => setPersonalInfo(prev => ({ ...prev, address: e.target.value }))}
                />
              </div>
              <div className="postal input">
                <label htmlFor="postal">Postal Code</label>
                <input
                  type="text"
                  name=""
                  id="postal"
                  value={personalInfo.postalCode}
                  onChange={e => setPersonalInfo(prev => ({ ...prev, postalCode: e.target.value }))}
                />
              </div>
            </div>
            <div className="section">
              <div className="driving input">
                <label htmlFor="driving input">Driving License</label>
                <input
                  type="text"
                  name=""
                  id="driving"
                  value={personalInfo.driving}
                  onChange={e => setPersonalInfo(prev => ({ ...prev, driving: e.target.value }))}
                />
              </div>
              <div className="nationality input">
                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  name=""
                  id="nationality"
                  value={personalInfo.nationality}
                  onChange={e =>
                    setPersonalInfo(prev => ({ ...prev, nationality: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="section">
              <div className="place-of-birth input">
                <label htmlFor="place">Place Of Birth</label>
                <input
                  type="text"
                  id="place-of-birth"
                  value={personalInfo.birthPlace}
                  onChange={e => setPersonalInfo(prev => ({ ...prev, birthPlace: e.target.value }))}
                />
              </div>
              <div className="date-of-birth input">
                <label htmlFor="date">Date Of Birth</label>
                <input
                  type="date"
                  id="date"
                  value={personalInfo.birthDate}
                  onChange={e => setPersonalInfo(prev => ({ ...prev, birthDate: e.target.value }))}
                />
              </div>
            </div>
            <div className="section single">
              <div className="linkedin input">
                <label htmlFor="linkedin">LinkedIn</label>
                <input
                  type="text"
                  name=""
                  id="linkedin"
                  value={personalInfo.linkedIn}
                  onChange={e => setPersonalInfo(prev => ({ ...prev, linkedIn: e.target.value }))}
                />
              </div>
            </div>
          </div>
        )}
        <div onClick={_ => setAditionalInfo(!aditionalInfo)} className="aditional-click">
          {!aditionalInfo ? `Edit aditional details` : `Hide aditional details`}
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
