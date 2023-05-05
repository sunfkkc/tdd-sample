import React, { FormEvent, useState } from 'react';
import { Todo } from 'types/Todo';

function TodoAdder({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}) {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = Math.max(...todos.map((todo) => todo.id)) + 1;
    setTodos([...todos, { completed: false, id, title }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(evt) => setTitle(evt.target.value)} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoAdder;
