import Chevron from '../../icons/Chevron'
import { useState } from 'react'

function BasicInfo({
  basicMultiText,
  handleMultiText,
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
          value={basicMultiText[0]}
          onChange={e=>handleMultiText(e, 0)}
        />
      </div>
      <div className="info-section">
        <p>Last name:</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Last name"
          value={basicMultiText[1]}
          onChange={e=>handleMultiText(e, 1)}
        />
      </div>
      <div className="info-section">
        <p>Title:</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="title"
          value={basicMultiText[2]}
          onChange={e=>handleMultiText(e, 2)}
        />
      </div>
      <div className="info-section">
        <p>Email:</p>
        <input
          type="email"
          name=""
          id=""
          placeholder="example@gmail.com"
          value={basicMultiText[3]}
          onChange={e=>handleMultiText(e, 3)}
        />
      </div>
      <div className="info-section">
        <p>Phone number:</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="+37060000000"
          value={basicMultiText[4]}
          onChange={e=>handleMultiText(e, 4)}
        />
      </div>
      <div className="info-section">
        <p>Country:</p>
        <input type="text" value={basicMultiText[5]} onChange={e=>handleMultiText(e, 5)} />
      </div>
      <div className="info-section">
        <p>City:</p>
        <input type="text" value={basicMultiText[6]} onChange={e=>handleMultiText(e, 6)} />
      </div>
      <button onClick={openDropdown}>Save</button>
    </div>
  );
}

export default BasicInfo;
