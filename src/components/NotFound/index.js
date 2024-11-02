import Header from '../Header'
import './index.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Header />
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="lost-your-way">Lost Your Way?</h1>
      <p className="lost-your-way-description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  )
}

export default NotFound
