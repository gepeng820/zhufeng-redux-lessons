import React from 'react';
import store from '../store';
export default class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {todos: []};
    }

    componentWillMount() {
        store.subscribe(() => {
            console.log(store.getState());
            this.setState({todos: store.getState().todos.list});
        })
    }

    add = (event) => {
        if(event.keyCode == 13){
            store.dispatch({type: 'ADD_TODO', text: event.target.value})
            event.target.value = '';
        }

    }

    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.add}/>
                <ul>
                    {
                        this.state.todos.map((todo,index)=>(
                            <li key={index}>{todo}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}