import React from 'react';
import NavBar from './components/NavBar';
import TodoList from './components/Todo-List';
import ThemeContextProvider from './contexts/ThemeContext';
import './index.css';


function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <ThemeContextProvider>
          <NavBar />
          <TodoList />
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
