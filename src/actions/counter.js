import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,  
    RESET_COUNT,
    SEND_COUNT,
} from '../constants/constants';

export const incrementAction = () => (
    {type: INCREMENT_COUNT,}
);

export const decrementAction = () => (
    {type: DECREMENT_COUNT,}
);
export const sendAction = (data) => (
    {type: SEND_COUNT, payload: data,}
);
export const resetAction = () => (
    {type: RESET_COUNT,}
);