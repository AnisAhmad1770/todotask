import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const loadTodosFromLocalStorage = (): Todo[] => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const initialState: TodosState = {
  todos: loadTodosFromLocalStorage(),
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos)); 
    },
    
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find(t => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        localStorage.setItem('todos', JSON.stringify(state.todos)); 
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos)); 
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state.todos)); 
      }
    },
  },
});

export const { addTodo, editTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
