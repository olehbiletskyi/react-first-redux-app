import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,  
} from '../constants/constants';

export const incrementAction = () => ({
    type: INCREMENT_COUNT,
});

export const decrementAction = () => ({
    type: DECREMENT_COUNT,
});