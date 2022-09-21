import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import CountrieInfoCard from './components/CountrieInfoCard'
import { FavListProvider } from './context/basicContext'
import MainPage from './MainPage'
import "./styles/styles.css"

export default function Router() {
  return (
      
    <HashRouter>
        <Routes>
            <Route path="/countrie/:code" element={<CountrieInfoCard/>}/>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    </HashRouter>
      
  )
}
