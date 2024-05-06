import React, { useState } from 'react';
import Main from './components/main';
import MealDetail from './components/mealDetail';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./components/common/mainLayout";
import Voting from "./components/voting";
import Ranking from "./components/ranking";
import Setting from "./components/setting";
import SignIn from './components/signIn';
import VotingDetail from './components/voting/votingDetail';
import VotingMaking from './components/voting/votingMaking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Main/>}/>
            <Route path='/mealDetail' element={<MealDetail/>}/>
            <Route path='/voting' element={<Voting/>}/>
            <Route path='/voting/:id' element={<VotingDetail/>}  />
            <Route path='/voting/making' element={<VotingMaking/>}/>
            <Route path='/ranking' element={<Ranking/>}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/signin' element={<SignIn/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


