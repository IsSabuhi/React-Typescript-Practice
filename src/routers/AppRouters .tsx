import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import CountView from '../views/CountView'
import HomeView from '../views/HomeView'

export default function AppRouters () {
  return (
    <>
      <Header title='Test App'/>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/countview" element={<CountView />} />
      </Routes>
    </>
  )
}
