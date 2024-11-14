import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props
  return (
    <div className="nav">
      <div className="nav2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!isGameOver && (
        <div className="nav2">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
