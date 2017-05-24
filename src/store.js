import {createStore, combineReducers} from 'redux';
let calc = (state = {number: 0}, action) => {
    if (action.type === 'ADD') {
        return {number: state.number + 1};
    } else {
        return state;
    }

}
let todos = (state={list:[]}, action) => {
    if (action.type === 'ADD_TODO') {
        return {list: [...state.list, action.text]}
    } else {
        return state;
    }
}
const reducer = combineReducers({calc, todos});
let store =  createStore(reducer);
export default store;