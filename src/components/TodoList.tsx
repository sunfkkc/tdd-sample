import React from 'react';
import { Todo } from 'types/Todo';
import TodoListItem from 'components/TodoListItem';

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          completed={todo.completed}
          priority={todo.priority}
          title={todo.title}
        />
      ))}
    </div>
  );
}

export default TodoList;
