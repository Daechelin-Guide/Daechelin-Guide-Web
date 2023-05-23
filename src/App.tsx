import React from 'react';
import Main from './components/main/Main';
import MealDetail from './components/mealDetail/mealDetail';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/MealDetail' element={<MealDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
