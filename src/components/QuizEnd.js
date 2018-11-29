import React, { Component } from "react"

class QuizEnd extends Component {
    handleResetClick = () => {
        this.props.resetClickHandler();
    }

    render() {
        return <section className="container">
                <div className="notification is-success">
                <h1>Thanks for playing!</h1>
                <br/>
                <a className="button is-dark" onClick={this.handleResetClick}>
                Reset Quiz
              </a>
            </div>
        </section>;
      }
  }

export default QuizEnd