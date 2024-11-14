import './index.css'

const EmojiCard = props => {
  const {shuffledEmojisList, onEmojiClick} = props

  return (
    <div className="card2">
      <ul>
        {shuffledEmojisList.map(i => (
          <li key={i.id} className="emojiCard">
            <button type="button" onClick={() => onEmojiClick(i.id)}>
              <img src={i.emojiUrl} alt={i.emojiName} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EmojiCard
