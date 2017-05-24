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
    constructor(props) {
        super(props);
        this.state = {number: store.getState().number};
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({number: store.getState().number});
        });
    }

    componentWillUnMount(){
        this.unsubscribe();
    }

    add() {
        store.dispatch({type: 'ADD'});
    }

    render() {
        return (
            <div>
                <p>{store.getState().number}</p>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter/>, document.querySelector('#root'));
