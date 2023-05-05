import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoListItem from 'components/TodoListItem';

describe('TodoListItemTest', () => {
  test('할일과 우선순위가 정상 렌더링 된다', async () => {
    render(<TodoListItem title="tdd 공부하기" Priority={1} />);
    await screen.findByText('tdd 공부하기');
    await screen.findByText('1');
  });
});
