import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import TodoList from './components/TodoList';

ReactDOM.render(<div>
    <Calculator/>
    <TodoList/>
</div>,document.querySelector('#root'));