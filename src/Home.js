import React from 'react'
import createReducer from './components/ReactCounter';
import { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const initialState = { count: 0 };

const reducer = createReducer(initialState, {
  reset: () => initialState,
  increment: state => ({ count: state.count + 1 }),
  decrement: state => ({ count: state.count - 1 })
});

const Home = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
export default Home;
