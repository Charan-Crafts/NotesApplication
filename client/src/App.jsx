import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Notes from './pages/Notes';
import Signup from "./pages/Signup"
import { Route,Routes } from 'react-router-dom';
import EditPage from "./pages/EditPage"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/notes/:id" element={<EditPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
