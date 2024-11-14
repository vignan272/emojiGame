import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain} = props

  return (
    <div className="bg3">
      {score === 12 ? (
        <div>
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>12/12</p>
          <button type="button" onClick={onPlayAgain}>
            Play Again
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      ) : (
        <div>
          <h1>You Lose</h1>
          <p>Score</p>
          <p>{score}/12</p>
          <button type="button" onClick={onPlayAgain}>
            Play Again
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
