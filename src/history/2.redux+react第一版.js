import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
const initState = {number: 0};
const counter = (state = initState, action) => {
    if (action.type === 'ADD')
        return {number: state.number + 1};
    else
        return state;
}
const store = createStore(counter);
class Counter extends React.Component {
    render() {
        return (
            <div>
                <p>{store.getState().number}</p>
                <button onClick={()=>store.dispatch({type:'ADD'})}>+</button>
            </div>
        )
    }
}
let render = () => {
    ReactDOM.render(<Counter/>, document.querySelector('#root'));
}
store.subscribe(render);
render();