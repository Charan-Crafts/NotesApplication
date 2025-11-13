import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Notes from './pages/Notes';
import Signup from "./pages/Signup"
import { Route, Routes } from 'react-router-dom';
import EditPage from "./pages/EditPage"
import JoditTextEditor from './components/Notes/JoditTextEditor';

import { useSelector } from 'react-redux';
import ProtectedRoutes from './pages/ProtectedRoutes';
import PageNotFound from './pages/PageNotFound';


const App = () => {
  const { token } = useSelector((state) => state.auth)
  console.log(token);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:id" element={<EditPage />} />
          <Route path="/notes/editor" element={<JoditTextEditor />} />
        </Route>

        <Route path="*" element={<PageNotFound/>}></Route>

      </Routes>
    </>
  );
}

export default App;
