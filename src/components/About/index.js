import Header from '../Header'
import './index.css'

const About = () => {
  return (
    <div className="about-bg-container">
      <Header />

      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="show-sm-about-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="show-lg-about-img"
      />
    </div>
  )
}

export default About
