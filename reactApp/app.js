import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [{taskText: "get groceries", completed: true }, { taskText: "get oil changed", completed: false }, { taskText: "send thank you letters", completed: false }];

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {dummyData.map((element) => <li><button>X</button>{element.completed ? <strike>{element.taskText}</strike> : element.taskText}
        </li>)}

      </ul>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
      <input type="text" placeholder="task" />
      <button type="submit">Add todo</button>
      </div>
    )
  }
}

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


ReactDOM.render(<TodoApp />,
document.getElementById('root'));
