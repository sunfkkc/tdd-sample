import React from 'react';

function TodoListItem({ title, Priority }: Props) {
  return (
    <div>
      <div>{title}</div>
      <div>{Priority}</div>
    </div>
  );
}

export default TodoListItem;

export interface Props {
  title: string;
  Priority?: number;
}
