import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }
  handleClick = (buttonText) => {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ incorrectAnswer: true });
    }
  }
  render() {
    return <main className="container">
        <section className="tile">
          <div className="hero">
            <div className="hero-body">
              <div className="container">
                <h2 className="subtitle">Question {this.props.index}</h2>
                <h1 className="title">
                  {this.props.quiz_question.instruction_text}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="tile is-parent is-vertical">
          <ul className="columns tile">
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => {
                return (
                  <QuizQuestionButton
                    key={index}
                    button_text={answer_option}
                    clickHandler={this.handleClick}
                  />
                );
              }
            )}
          </ul>
        </section>
        {this.state.incorrectAnswer ?
            <section className="tile">
                <div className="container notification is-danger">
                 <h3>Sorry, that's wrong </h3>
                </div>
            </section>
           : null}
      </main>;
  }
}

export default QuizQuestion;
