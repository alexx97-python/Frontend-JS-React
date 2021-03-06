import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import {createControl, validate, validateForm} from '../../form/formFramework';
import Input from '../../components/UI/Input/Input';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Select from '../../components/UI/Select/Select';
import { connect } from 'react-redux';
import { createQuizQuestion, finishCreateQuiz } from '../../store/actions/create_quiz';

function createOptionControl(number){
    return createControl({
        label:`Option ${number}`,
        errorMessage: 'The field can\'t be empty',
        id: number
        }, {required: true})
    }

function createFormControls (){
    return {
        question: createControl({
            label: 'Enter your question',
            errorMessage: 'The field question can\'t be empty!'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}


class QuizCreator extends Component{

    state = {
        quizTitle: createControl({
            label: 'Enter your quiz title',
            errorMessage: 'The field question can\'t be empty!'
        }, {required: true}),
        newQuiz: true,
        rightAnswerId: 1,
        isFormValid: false,
        formControls: createFormControls()
    }

    submitHandler = event =>{
        event.preventDefault()
    }

    addQuestionHandler = (event) => {
        event.preventDefault();

        const {question, option1, option2, option3, option4} = this.state.formControls;
        const quizTitle = this.state.quizTitle;

        const questionItem = {
            quizTitle: quizTitle.value,
            question: question.value,
            id: this.props.quiz.length + 1,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id },
                {text: option2.value, id: option2.id },
                {text: option3.value, id: option3.id },
                {text: option4.value, id: option4.id },
            ]
        }

        this.props.createQuizQuestion(questionItem);

        this.setState({
            newQuiz: false,
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })
    }

    createQuizHandler = event => {
        event.preventDefault()

        this.props.finishCreateQuiz()

            this.setState({
                quizTitle: createControl({
                    label: 'Enter your quiz title',
                    errorMessage: 'The field question can\'t be empty!'
                }, {required: true}),
                newQuiz: true,
                rightAnswerId: 1,
                isFormValid: false,
                formControls: createFormControls()
            })

    }

    changeTitleHandler = (value) => {
        const quizTitle = {...this.state.quizTitle}
        quizTitle.value = value;

        this.setState({
            quizTitle,
        })

    }

    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }

    renderControls(){
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];


            return (
                <Auxiliary>
                    <Input
                    key={control.label + index}
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}
                    disabled={false}
                    />
                    {index === 0 ? <hr /> : null}
                </Auxiliary>
            )
        })
    }

    render(){
        const select = <Select 
            label="Choose right answer"
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4},
            ]}
        />
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Create Your Quiz</h1>

                    <form onSubmit={this.submitHandler}>

                        <Input
                        key={this.state.quizTitle}
                        label={this.state.quizTitle['label']}
                        value={this.state.quizTitle['value']}
                        errorMessage={this.state.quizTitle['errorMessage']}
                        onChange={event => this.changeTitleHandler(event.target.value)}
                        disabled={!this.state.newQuiz}
                        />

                        {this.renderControls()}

                        { select }

                        <Button
                          key='btn-primary'
                          type='primary'
                          onClick={this.addQuestionHandler}
                          disabled={!this.state.isFormValid}
                        >
                            Create Question
                        </Button>

                        <Button
                          key='btn-success'
                          type='success'
                          onClick={this.createQuizHandler}
                          disabled={this.props.quiz.length === 0}
                        >
                            Create Quiz
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        quiz: state.create.quiz
    }
}

function mapDispatchToProps(dispatch){
    return {
        createQuizQuestion: (item) => dispatch(createQuizQuestion(item)),
        finishCreateQuiz: () => dispatch(finishCreateQuiz())
    }
}

export default connect (mapStateToProps, mapDispatchToProps ) (QuizCreator);