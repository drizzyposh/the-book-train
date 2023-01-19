import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Booklist from './components/Booklist'
import Bookmarks from './components/Bookmarks';
import Navbar from './components/Navbar';
import Bookdetails from './components/Bookdetails';
import Footer from './components/Footer';


function App() {
  return (
    <React.Fragment>

      <Navbar />
      <Routes>
        <Route path='/' element={<Booklist />}/>
        <Route path='/books/:id' element={<Bookdetails />}/>
        <Route path='/bookmarks' element={<Bookmarks />}/>
      </Routes>
      <Footer />

    </React.Fragment>
  );
}

export default App; 