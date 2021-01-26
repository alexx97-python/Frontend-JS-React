import React, {Component} from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import classes from './Quiz.module.css';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import { fetchQuizById } from '../../store/actions/quiz';

class Quiz extends Component {

    onAnswerClickHandler = (answerId) => {
        if(this.props.answerprops) {
            const key = Object.keys(this.props.answerprops)[0]
            if (this.props.answerprops[key] === 'success') {
                return
            }
        }

        const question = this.props.quiz[this.props.activeQuestion];
        const results = this.props.results;

        if (question.rightAnswerId === answerId) {
            if(!results[question.id]){
                results[question.id] = 'success';
            }
            
            this.setprops({
                answerprops: {
                    [answerId]: 'success'
                },
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()){
                    this.setprops({
                        isFinished: true
                    })
                } else {
                    this.setprops({
                        activeQuestion: this.props.activeQuestion + 1,
                        answerprops: null
                    })
                }
                window.clearTimeout(timeout);
            }, 1000)
        } else {
            results[question.id] = 'error';
            this.setprops({
                answerprops: {
                    [answerId]: 'error',
                },
                results,
            })
        }
    }

    isQuizFinished() {
        return this.props.activeQuestion + 1 === this.props.quiz.length
    }

    onRestartHandler = () => {
        this.setprops({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerprops: null,
        })
    }

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
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
                            onRestart = {this.onRestartHandler}
                        />
                        : <ActiveQuiz 
                            answers = {this.props.quiz[this.props.activeQuestion].answers}
                            question = {this.props.quiz[this.props.activeQuestion].question}
                            onAnswerClick = {this.onAnswerClickHandler}
                            quizLength = {this.props.quiz.length}
                            answerNumber = {this.props.activeQuestion + 1}
                            props = {this.props.answerprops}
                            />
                    }
                </div>
                
            </div>
        )
    }
}

function mappropsToProps(props){

    return {
        results: props.quiz.results,
        isFinished: props.quiz.isFinished,
        activeQuestion: props.quiz.activeQuestion,
        answerprops: props.quiz.answerprops,
        quiz: props.quiz.quiz,
        loading: props.quiz.loading
    }
}

function mapDispatchToProps(dispatch){

    return {
        fetchQuizById: id => dispatch(fetchQuizById(id))
    }
}

export default connect(mappropsToProps, mapDispatchToProps)(Quiz);