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
  }

  deleteHandler(index){
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({
      cars
    })

  }

  changeTitleHandler = (pageTitle) => {
    console.log('Clicked');

    this.setState({
      pageTitle
    })
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
        cars
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
                onDelete = {this.deleteHandler.bind(this, index)}
                onChangeName = {(e) => {this.onChangeName(e.target.value, index)}}
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
