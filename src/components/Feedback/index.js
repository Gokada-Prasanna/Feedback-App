// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {container1: 'displayVisible', container2: 'displayNone'}

  onClickHandler = () => {
    this.setState({container1: 'displayNone', container2: 'displayVisible'})
  }

  render() {
    const {container1, container2} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className={container1}>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojisList">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                  onClick={this.onClickHandler}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={container2}>
          <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
          <h1 className="thankyou-para">Thank You!</h1>
          <p className="feedback-para">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
