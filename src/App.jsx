import { useState } from 'react'
import './App.css'
import React from 'react'
import {Route, Routes, Navigate } from "react-router-dom"

import HomePage from './Pages/HomePage'
import ProjectPage from './Pages/ProjectPage/ProjectPage'

function App() {
  

  return (
    <Routes>
      <Route
          path="/"
          element={<HomePage />}
        />
      <Route
          path="/projects"
          element={<ProjectPage />}
        />



    </Routes>  
  )
}

export default App
