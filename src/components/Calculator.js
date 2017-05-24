import React from 'react';
import store from '../store';
export default class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {number:0};
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({number:store.getState().calc.number});
        })
    }
    add = ()=>{
        store.dispatch({type:'ADD'})
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}