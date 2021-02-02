import React, {useState} from "react";

function computeInitialState(){
  console.log('Initial calculations ... ')
  return Math.trunc(Math.random()*10)
}



function App() {
  const [counterState, setStateCounter] = useState(() => {
    return computeInitialState();
  });

  const [state, setState] = useState({
    title: 'Counter',
    data: Date.now()
  })

  console.log(counterState);
  console.log(setStateCounter)

  function increment (){
    //setStateCounter(counterState + 1);

    // Best practise use callbacks to change state
    setStateCounter((prevState) => {
      return prevState + 1
    })

    setStateCounter((prevState) => {
      return prevState + 1
    })
  }

  function decrement(){
    setStateCounter(counterState -1);
  }

  function changeTitle(){
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }
    })
  }


  return (
    <div>
      <h1>Counter {counterState}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={changeTitle}>Change</button>

      <pre>{JSON.stringify(state)}</pre>
      
    </div>
  );
}

export default App;
