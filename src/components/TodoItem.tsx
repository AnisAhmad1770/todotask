import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../redux/todosSlice';
import "../styles/components/TodoItem.scss";

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (newText.trim()) {
      dispatch(editTodo({ id: todo.id, text: newText }));
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleEdit} // Optional: Save on blur
            autoFocus // Focus input when editing
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <span
            className={todo.completed ? 'completed' : ''}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          <button onClick={() => {
            setNewText(todo.text);
            setIsEditing(true);
          }}>
            Edit
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
