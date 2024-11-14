import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojiList: [],
    isGameOver: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  handleEmojiClick = id => {
    this.setState(prevState => {
      const {clickedEmojiList, score, topScore} = prevState

      if (clickedEmojiList.includes(id)) {
        return {
          isGameOver: true, // End the game if emoji already clicked
        }
      }

      const newScore = score + 1
      const isGameOver = newScore === 12 // Game over if score reaches 12 (win condition)

      return {
        score: newScore,
        clickedEmojiList: [...clickedEmojiList, id],
        topScore: Math.max(topScore, newScore),
        isGameOver,
      }
    })
  }

  handlePlayAgain = () => {
    this.setState({
      score: 0,
      clickedEmojiList: [],
      isGameOver: false,
    })
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {score, topScore, isGameOver} = this.state

    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        {isGameOver ? (
          <WinOrLoseCard score={score} onPlayAgain={this.handlePlayAgain} />
        ) : (
          <EmojiCard
            shuffledEmojisList={shuffledEmojisList}
            onEmojiClick={this.handleEmojiClick}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
