import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var todoList = this.props.todos.slice()
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
