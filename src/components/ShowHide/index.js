// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameChange = () => {
    const {firstName} = this.state
    if (firstName === false) {
      this.setState({firstName: true})
    } else {
      this.setState({firstName: false})
    }
  }

  lastNameChange = () => {
    const {lastName} = this.state
    if (lastName === false) {
      this.setState({lastName: true})
    } else {
      this.setState({lastName: false})
    }
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="each-card">
            <button
              type="button"
              className="button"
              onClick={this.firstNameChange}
            >
              Show/Hide Firstname
            </button>
            {firstName ? <p className="name">Joe</p> : null}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.lastNameChange}
            >
              Show/Hide Lastname
            </button>
            {lastName ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
