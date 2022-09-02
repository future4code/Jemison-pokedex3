import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {HomePage} from "../Pages/HomePage/HomePage"
import {PokedexPage} from "../Pages/PokedexPage/PokedexPage"
import {DetailPage} from '../Pages/DetailPage/DetailPage'

const Router = () => {
  
  return (
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/pokedex" element={<PokedexPage />} />
      <Route path="/pokedex/:id" element={<DetailPage />}  />
      
    </Routes>
  </BrowserRouter>
)}

export default Router
