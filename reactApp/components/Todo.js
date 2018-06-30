import React from 'react';

const Todo = props =>{
console.log(props);
  return (
    props.completed ? <li><button>X</button><strike>{props.taskText}</strike></li> : <li><button>X</button>{props.taskText}</li>
  )

}
export default Todo;
