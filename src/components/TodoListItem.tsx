import React from 'react';
import { Todo } from 'types/Todo';

function TodoListItem({ title, priority, completed }: Omit<Todo, 'id'>) {
  return (
    <div>
      <div>{title}</div>
      <div>{priority}</div>
      {completed ? <div>{'완료'}</div> : <div>{'미완료'}</div>}
    </div>
  );
}

export default TodoListItem;
