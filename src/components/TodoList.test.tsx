import { render, screen } from '@testing-library/react';
import TodoList from 'components/TodoList';

describe('TodoListTest', () => {
  test('할일 목록들이 정상 렌더링 된다', async () => {
    render(
      <TodoList
        todos={[
          { id: 1, completed: false, priority: 1, title: 'tdd 공부하기' },
          { id: 2, completed: true, title: '리액트 공부하기' },
        ]}
      />
    );

    await screen.findByText('tdd 공부하기');
    await screen.findByText('리액트 공부하기');
  });
});
