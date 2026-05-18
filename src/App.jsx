import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';

const testValue = import.meta.env.VITE_test_value;

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/home' element={<Home />}/>
          </Route>
          
        </Routes>
    </BrowserRouter>
  );
}

export default App
