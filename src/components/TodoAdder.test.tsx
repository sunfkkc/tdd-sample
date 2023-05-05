import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoAdder from 'components/TodoAdder';
import { Todo } from 'types/Todo';

describe('TodoAdderTest', () => {
  test('할일이 정상적으로 추가 된다.', async () => {
    let todos: Todo[] = [{ completed: false, id: 1, title: 'tdd 공부하기' }];

    const setTodos = (newTodos: Todo[]) => {
      todos = newTodos;
    };

    render(<TodoAdder todos={todos} setTodos={setTodos} />);

    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, '리액트 공부하기');
    userEvent.click(screen.getByRole('button'));

    expect(todos[todos.length - 1]).toStrictEqual<Todo>({
      completed: false,
      id: 2,
      title: '리액트 공부하기',
    });
  });
});
