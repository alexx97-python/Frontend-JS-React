import React, {Component} from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import classes from './Quiz.module.css';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import { fetchQuizById, quizAnswerClick, restartQuiz } from '../../store/actions/quiz';

class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.restartQuiz()
    }

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Answer all the questions</h1>

                    {this.props.loading || !this.props.quiz
                    ? <Loader />
                    : this.props.isFinished
                        ? <FinishedQuiz 
                            results = {this.props.results}
                            quiz = {this.props.quiz}
                            onRestart = {this.props.restartQuiz}
                        />
                        : <ActiveQuiz 
                            answers = {this.props.quiz[this.props.activeQuestion].answers}
                            question = {this.props.quiz[this.props.activeQuestion].question}
                            onAnswerClick = {this.props.quizAnswerClick}
                            quizLength = {this.props.quiz.length}
                            answerNumber = {this.props.activeQuestion + 1}
                            state = {this.props.answerState}
                            />
                    }
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(props){

    return {
        results: props.quiz.results,
        isFinished: props.quiz.isFinished,
        activeQuestion: props.quiz.activeQuestion,
        answerState: props.quiz.answerState,
        quiz: props.quiz.quiz,
        loading: props.quiz.loading
    }
}

function mapDispatchToProps(dispatch){

    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        restartQuiz: () => dispatch(restartQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);