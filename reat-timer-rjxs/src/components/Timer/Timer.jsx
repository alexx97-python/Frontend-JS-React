import React, { Component } from 'react';
import {Observable} from 'rxjs';
import classes from './style/style.module.css'


const TimerNew = new Observable (observer => {
    let time = 0;
    setInterval(()=>{
        observer.next(time += 1);
    }, 1000)
})


class Timer extends Component {
    constructor(props){
        super(props)
        this.subscriber = null
        this.state = {
            startTime: 0,
            waitedTime: 0,
            timerState: null,
        }

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.waitTimer = this.waitTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer (){
        this.subscriber = TimerNew.subscribe(
            (time) => {
                 if (this.state.timerState === 'wait') {
                    this.setState({
                        startTime: this.state.waitedTime + time,
                        timerState: 'start'
                    })
                } else {
                    this.setState({
                        startTime: this.state.waitedTime + time,
                        timerState: 'start'
                    })
                }
            })
    }

    stopTimer (){
        this.subscriber.unsubscribe();
        this.setState({
            timerState: 'stop',
            waitedTime: 0
        })
    }

    waitTimer () {
        this.subscriber.unsubscribe();
        this.setState({
            timerState: 'wait',
            waitedTime: this.state.startTime
        })
    }

    resetTimer (){
        this.subscriber.unsubscribe();
        this.setState({
            startTime: 0,
            waitedTime: 0,
            timerState: 'reseted'
        })
        this.startTimer()
    }

    getTimeFormat(seconds){
        let result = new Date(seconds * 1000).toISOString().substr(11, 8);
        console.log(result)
        return result
    }

    render(){
        return (
        <div className={classes.container}>
            <h1 className={classes.header}>My Second-Counter using React, RXjs(Observables)</h1>
            <p>{this.getTimeFormat(this.state.startTime)} </p>
            <div className={classes.action__buttons}>
                {(this.state.timerState !== 'start')
                ? <button className={classes.start} onClick={this.startTimer}>Start</button>
                :<button className={classes.stop} onClick={this.stopTimer}>Stop</button>
                }
                <button className={classes.wait} onDoubleClick={this.waitTimer}>Wait</button>
                <button className={classes.reset} onClick={this.resetTimer}>Reset</button>
            </div>
        </div>
    )
    }
}

export default Timer;