import {createStore} from 'redux';
import $ from 'jquery';
$(document.body).append(`
 <p id="counter"></p>
 <button id="increase">+</button>
`);
const initState = {number: 0};
const counter = (state = initState, action) => {
    if (action.type === 'ADD')
        return {number:state.number+1};
    else
        return state;
}
const store = createStore(counter);
$('#increase').on('click', function () {
    store.dispatch({type: 'ADD'});
});
store.subscribe(() => {
    $('#counter').html(store.getState().number);
})