import { useState } from 'react'
import { Navbar } from './components/index'
import {Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/contacts'
import Portraits from './pages/portraits'
import Wedding from './pages/wedding'
import Ocassion from './pages/ocassion'
import Branding from './pages/branding';
import Motherhood from './pages/motherhood';


import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/portraits' element={<Portraits />} />
        <Route path='/wedding' element={<Wedding />} />
        <Route path='/ocassion' element={<Ocassion />} />
        <Route path='/branding' element={<Branding />} />
        <Route path='/motherhood' element={<Motherhood />} />
      </Routes>


    </>
  )
}