import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout';
import { SearchListProvider } from './contexts/SearchListContext';

import Home from './pages/Home';
import Genres from './pages/Genres';

const testValue = import.meta.env.VITE_test_value;

function App() {
  return (
    <SearchListProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/genres' element={<Genres />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </SearchListProvider>

  );
}

export default App
