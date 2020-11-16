import React from 'react'


function Counter(props) {
  return (
    <div className="Counter">
        <h1>{props.count}</h1>
        <button onClick={()=>props.increment()}> Increment + </button>
        <button onClick={()=>props.decrement()}> Decrement - </button>
        <button onClick={()=>props.reset()}> Reset 0 </button>
        <button onClick={()=>props.send(props.count)}> Send! </button>
        <h1>{props.saved}</h1>
    </div>
  );
}
export default Counter;
