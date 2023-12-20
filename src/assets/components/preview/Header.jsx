
function Header({ name, lastName, title, email, number, country, city }) {
  return (
    <div className="header">
        <div className="name-title">
            <div className="prev-name">
                {name} {lastName}
            </div>
            <div className="prev-title">
                {title}
            </div>
        </div>
        <div className="contacts">
            <div className="prev-email">
                {email}
            </div>
            <div className="prev-number">
                {number}
            </div>
            <div className="prev-country">
                {country} {city}
            </div>
        </div>
    </div>
  )
}

export default Header
