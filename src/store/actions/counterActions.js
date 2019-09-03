import {INCREMENT, DECREMENT} from './actionTypes';

export const increaseAction = (inc) =>{
    return{
        type: INCREMENT,
        inc: inc
    }
} 


export const decreaseAction = (dec) =>{
return {
    type: DECREMENT,
    dec: dec
}
} 