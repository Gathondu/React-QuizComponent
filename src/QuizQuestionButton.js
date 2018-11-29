import React, { Component } from "react"

class QuizQuestionButton extends Component {
    handleClick () { this.props.clickHandler(this.props.button_text)}
    render() {
        return <li className="column is-one-fifth">
            <button className="button is-medium is-fullwidth" onClick={this.handleClick.bind(this)}>
              {this.props.button_text}
            </button>
          </li>;
    }
}

export default QuizQuestionButton