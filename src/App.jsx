// import { useState } from 'react'
import { Login } from './Login/Login'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import HomePage from './Page/HomePage';


function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
