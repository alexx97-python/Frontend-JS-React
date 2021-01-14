import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
    cars:[
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010},
    ],
    pageTitle: 'React components',
    showCars: false, 
    clicked: false
  }
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

  /* componentWillMount(){
    console.log('App componentWillMount')
  }

  componentDidMount(){
    console.log('App componentDidMount')
  }
 */
  /* handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  } */

  render(){
    console.log('App render')
    const divStyle = {
      textAlign: 'center'
    }

    return(
      <div style={divStyle}>
        {/* <h1 style={{color: 'blue', fontSize: '20px'}}>{this.state.pageTitle}</h1> */}
        <h1 style={{color: 'blue', fontSize: '20px'}}>{this.props.title}</h1>
        {/* <input type='text' onChange = {this.handleInput} /> */}
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        

        <button onClick={this.toggleCarsHandler} style={{marginTop: '20px'}}> Toggle Cars </button>
        
        <button onClick={()=>this.setState({clicked: !this.state.clicked})}> Change clicked</button>

        {(this.state.showCars)
          ? this.state.cars.map((car, index)=>{
          return (
            <ErrorBoundary key={index}>
              <Car
                name = {car.name}
                year = {car.year}
                index={index}
                onDelete = {this.deleteHandler.bind(this, index)}
                onChangeName = {(e) => {this.onChangeName(e.target.value, index)}}
              />
            </ErrorBoundary>
            )
        })
        : null
        }
      </div>
    )
  }
}

export default App;
