import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const renderHamburgerBtn = () => {
    return (
      <div className="popup-bg-container">
        <Popup
          modal
          trigger={
            <button
              className="hamburger-btn"
              type="button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hamburger-menu" />
            </button>
          }
        >
          {close => (
            <div>
              <div>
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose />
                </button>
              </div>
              <ul>
                <li className="close-home-container">
                  <AiFillHome />
                  <Link to="/">Home</Link>
                </li>
                <li className="close-about-container">
                  <BsInfoCircleFill />
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    )
  }
  return (
    <nav className="nav-container">
      <div className="logo-menu-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        {renderHamburgerBtn()}
      </div>
      <hr className="seperator" />
    </nav>
  )
}

export default Header
