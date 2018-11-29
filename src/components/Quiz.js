import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js"
import QuizEnd from "./QuizEnd";

let quizData = require('../quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 };
    }
    showNextQuestion = () => {
        this.setState((prevState, props) => {
            return { quiz_position: prevState.quiz_position + 1 };
        });
    }
    handleResetClick = () => {
        this.setState(({ quiz_position: 1 }))
    }

    render() {
        const isQuizEnd =
            this.state.quiz_position - 1 === quizData.quiz_questions.length;
        return <div className="tile is-ancestor">
            {isQuizEnd ? (
              <QuizEnd
                resetClickHandler={this.handleResetClick}
              />
            ) : (
              <QuizQuestion
                showNextQuestionHandler={this.showNextQuestion}
                quiz_question={
                  quizData.quiz_questions[this.state.quiz_position - 1]
                }
                index={this.state.quiz_position}
              />
            )}
          </div>;
    }
}

export default Quiz