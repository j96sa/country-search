import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import CountrieInfoCard from './components/CountrieInfoCard'
import MainAllCountriesComponent from './components/MainAllCountriesComponent'
import MainContinentCountriesComponent from './components/MainContinentCountriesComponent'
import MainContinentsComponent from './components/MainContinentsComponent'
import { FavListProvider } from './context/basicContext'
import MainPage from './MainPage'
import "./styles/styles.css"

export default function Router() {
  return (
      
    <HashRouter>
        <Routes>
            <Route path="/countrie/:code" element={<CountrieInfoCard/>}/>
            <Route path="/" element={<MainPage/>}>
              <Route path="/continents" element={<MainContinentsComponent/>} />
              <Route path="/continents/:continent" element={<MainContinentCountriesComponent/>} />
              <Route path="/all-countries" element={<MainAllCountriesComponent/>} />
            </Route>
        </Routes>
    </HashRouter>
      
  )
}
