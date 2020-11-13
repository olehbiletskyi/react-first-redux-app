import React from 'react'


function Counter(props) {
  return (
    <div className="Counter">
        <h1>{props.count}</h1>
        <button onClick={()=>props.increment()}> Increment </button>
        <button onClick={()=>props.decrement()}> Decrement </button>
    </div>
  );
}
export default Counter;
