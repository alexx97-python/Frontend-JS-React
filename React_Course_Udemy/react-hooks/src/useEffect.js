import React, {useState, useEffect} from "react";



function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({x:0, y:0});

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  //triggers every time the component is rendered when sth was changed in state
 /*  useEffect(() => {
    console.log('Render ')
  })
 */
  // Second argument allows us to specify if to change of what we should trigger code onside useEffect
  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setData(json))
  }, [type]);

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    return() => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, []);



  return (
    <div>
      <h1>Resourse: {type}</h1>

      <button onClick={()=> setType('users')}>Users</button>
      <button onClick={()=> setType('todos')}>Todo</button>
      <button onClick={()=> setType('posts')}>Posts</button>


      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos)}</pre>
    </div>
  );
}

export default App;
