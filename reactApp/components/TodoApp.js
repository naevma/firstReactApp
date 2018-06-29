import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';


var dummyData = [{taskText: "get groceries", completed: true }, { taskText: "get oil changed", completed: false }, { taskText: "send thank you letters", completed: false }];

class TodoApp extends React.Component {
  render(){
    return(
      <div>
      <InputLine/>
      <TodoList/>
      </div>
    )
  }
}

export default TodoApp;
