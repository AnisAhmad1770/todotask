import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Header from '../components/Header';
import "../styles/components/Home.scss"
const Home: React.FC = () => {
  return (
    <div className='todo-app'>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
