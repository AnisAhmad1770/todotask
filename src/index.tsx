import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './redux/todosSlice';
import App from './App';
import './styles/App.scss';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

const container = document.getElementById('root')!;
const root = createRoot(container); 

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
