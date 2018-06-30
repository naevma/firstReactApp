import React from 'react';

export const Todo = props =>{
  return (
    <li><button>X</button>{props.completed ? <strike>{props.taskText}</strike> : props.taskText}</li>
  )

}
