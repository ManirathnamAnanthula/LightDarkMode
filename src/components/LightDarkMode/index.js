import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  changeMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const bgMode = isDark ? 'dark-mode' : 'light-mode'
    const text = isDark ? 'Light Mode' : 'Dark Mode'
    const fontHeading = isDark ? 'white-font' : 'black-font'
    return (
      <div className="container">
        <div className={bgMode}>
          <h1 className={fontHeading}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
