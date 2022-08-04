import './index.css'

const HistoryItem = props => {
  const {browserDetails, onDeleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserDetails

  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="containerr">
      <div className="appp-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img" />
        <p className="title">{title}</p>
        <p className="textt">{domainUrl}</p>
      </div>
      <button type="button" onClick={onDelete} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default HistoryItem
