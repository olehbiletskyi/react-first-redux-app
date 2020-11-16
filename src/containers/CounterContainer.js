import React from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction, resetAction, sendAction } from '../actions/counter';
import Counter from '../components/Counter/counter';


const CounterContainer = ({count, incrementAction, decrementAction, resetAction, sendAction, saved}) => (
    <Counter
        count={count}
        increment={incrementAction}
        decrement={decrementAction}
        send={sendAction}
        reset={resetAction}
        saved={saved}
    />
);


const mapStateToProps = (state) => ({
    count: state.counter.count,
    saved: state.counter.savedData,
})

// const mapDispatchToProps = () => {
//     return {
//         increment: incrementAction,
//         decrement: decrementAction,
//     }
// };


export default connect(
    mapStateToProps,
    // mapDispatchToProps,
    {incrementAction, decrementAction, resetAction, sendAction}
)(CounterContainer);