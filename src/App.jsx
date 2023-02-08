import { useState } from 'react'
import './App.css'
import React from 'react'
import {Route, Routes, Navigate } from "react-router-dom"

import HomePage from './Pages/HomePage'

function App() {
  

  return (
    <Routes>
      <Route
          path="/"
          element={<HomePage />}
        />



    </Routes>  
  )
}

export default App
