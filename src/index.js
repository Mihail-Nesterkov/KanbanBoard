import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/header/header.css'
import './components/main/main.css'
import Board from "./components/main/main";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Board />
    </BrowserRouter>
  </React.StrictMode>
);

