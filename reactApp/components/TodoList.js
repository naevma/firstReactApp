import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['hi', 'hello']
    }
  }
  render() {
    var todoList = this.state.todos.slice()
    var renderTodos = function() {
      return todoList.map((todo) => {
        return <Todo todo = {todo} />
      });
    }
    return (
      <div>
      {renderTodos()}
      </div>
    )
  }
}

  export default TodoList;
