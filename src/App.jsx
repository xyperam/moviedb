import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import store from './redux/store';
import { Provider } from 'react-redux';
import DetailMovie from './pages/DetailMovie';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/detail-movie/:id" element={<DetailMovie />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
