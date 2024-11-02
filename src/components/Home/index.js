import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div className="home-bg-container">
      <Header />

      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="show-sm-home-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="show-lg-home-img"
      />
    </div>
  )
}

export default Home
