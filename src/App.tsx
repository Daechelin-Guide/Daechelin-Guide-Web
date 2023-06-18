import React from 'react';
import Main from './components/main/Main';
import MealDetail from './components/mealDetail/MealDetail';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./components/common/mainLayout/MainLayout";
import Voting from "./components/voting/Voting";
import Ranking from "./components/ranking/Ranking";
import Setting from "./components/setting/Setting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Main/>}/>
            <Route path='/MealDetail' element={<MealDetail/>}/>
            <Route path='/Voting' element={<Voting/>}/>
            <Route path='/Ranking' element={<Ranking/>}/>
            <Route path='/Setting' element={<Setting/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
