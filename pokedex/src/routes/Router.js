import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {HomePage} from "../pages/HomePage/HomePage"
import {PokedexPage} from "../pages/PokedexPage/PokedexPage"
import {DetailPage} from '../pages/DetailPage/DetailPage'

const Router = () => {
  
  return (
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/pokedex" element={<PokedexPage />} />
      <Route path="/details/:id" element={<DetailPage />}  />
     
      
    </Routes>
  </BrowserRouter>
)}

export default Router;
