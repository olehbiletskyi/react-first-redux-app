import React from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from '../actions/counter';
import Counter from '../components/Counter/counter';


const CounterContainer = ({count, increment, decrement}) => (
    <Counter
        count={count}
        increment={increment}
        decrement={decrement}
    />
);


const mapStateToProps = (state) => ({
    count: state.counter.count
})

const mapDispatchToProps = () => {
    return {
        increment: incrementAction,
        decrement: decrementAction,
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);