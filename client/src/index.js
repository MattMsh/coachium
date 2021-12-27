import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Matches from './components/Matches';
import SignIn from './components/SignIn';
import Teams from './components/Teams';
import Players from './components/Players';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<SignIn />} />
      <Route path='/' element={<App />}>
        <Route path='teams' element={<Teams />} />
        <Route path='matches' element={<Matches />} />
        <Route path='players' element={<Players />} />
        <Route path='profile' element={<>Profile</>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

