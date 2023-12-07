import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TodoProvider } from './contexts/Todo'
import { FilterProvider } from './contexts/Filter'

import { Home } from './pages'
import './App.css';

function App() { 
  return (
    <>
    <TodoProvider>
      <FilterProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </FilterProvider>
    </TodoProvider>
    </>
  );
}

export default App;