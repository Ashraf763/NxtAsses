import './index.css'

import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="header-container">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/ddzpowg4l/image/upload/v1732030908/Group_8004_dvo4tx.png"
          alt="website logo"
          className="header-logo"
        />
      </Link>

      <button type="button" className="logout-btn" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(Header)
