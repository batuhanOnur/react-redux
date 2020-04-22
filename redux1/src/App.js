import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logged } from './actions';


function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Counter {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>


      <button onClick={() => dispatch(logged())}>LOG IN</button>
      {isLogged ? <h3>Valuable Information</h3> : ''}

    </div>
  );
}

export default App;
