import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state= {
    cars:[
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010},
    ],
    pageTitle: 'React components',
    showCars: false
  }

  toggleCarsHandler = () => {

    this.setState({
      showCars: !this.state.showCars
    })

    console.log(this.state.showCars);
  }

  changeTitleHandler = (pageTitle) => {
    console.log('Clicked');

    this.setState({
      pageTitle
    })
  }

  /* handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  } */

  render(){
    const divStyle = {
      textAlign: 'center'
    }

    return(
      <div style={divStyle}>
        <h1 style={{color: 'blue', fontSize: '20px'}}>{this.state.pageTitle}</h1>

        {/* <input type='text' onChange = {this.handleInput} /> */}

        <button onClick={this.toggleCarsHandler}> Toggle Cars </button>
        {(this.state.showCars)
          ? this.state.cars.map((car, index)=>{
          return (
              <Car
                key={index}
                name = {car.name}
                year = {car.year}
                onChangeTitle = {() => {this.changeTitleHandler(car.name)}}
              />
            )
        })
        : null
        
        }
      </div>
    )
  }
}

export default App;
