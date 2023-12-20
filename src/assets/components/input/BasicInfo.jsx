import Chevron from '../../icons/Chevron'
import { useState } from 'react'

function BasicInfo({
  name,
  handleName,
  lastName,
  handleLastName,
  title,
  handleTitle,
  email,
  handleEmail,
  number,
  handleNumber,
  country,
  handleCountry,
  city,
  handleCity,
}) {

  const [open, setOpen] = useState(false)
  const openDropdown = () => {
      console.log(open)
      setOpen(!open)
  }


  return (
    <div className={`basic-information ${open? 'active' : 'inactive' }`}   >
      <div className="basic-title" onClick={openDropdown}>
        <h3>Basic information</h3>
        <Chevron />
      </div>
      <div className="info-section">
        <p>Name:</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
      </div>
      <div className="info-section">
        <p>Last name:</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Last name"
          value={lastName}
          onChange={handleLastName}
        />
      </div>
      <div className="info-section">
        <p>Title:</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="title"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="info-section">
        <p>Email:</p>
        <input
          type="email"
          name=""
          id=""
          placeholder="example@gmail.com"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="info-section">
        <p>Phone number:</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="+37060000000"
          value={number}
          onChange={handleNumber}
        />
      </div>
      <div className="info-section">
        <p>Country:</p>
        <input type="text" value={country} onChange={handleCountry} />
      </div>
      <div className="info-section">
        <p>City:</p>
        <input type="text" value={city} onChange={handleCity} />
      </div>
      <button onClick={openDropdown}>Save</button>
    </div>
  );
}

export default BasicInfo;
