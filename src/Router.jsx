import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'
import "./styles/styles.css"

export default function Router() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    </HashRouter>
  )
}
