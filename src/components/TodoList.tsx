import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { RootState } from '../redux/store';
import "../styles/components/TodoList.scss"
const TodoList: React.FC = () => {
  
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="todo-list">
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
  
};

export default TodoList;
