import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';

import '../App.css';
import './UserList';
import UserList from './UserList';


function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UserList/>}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
