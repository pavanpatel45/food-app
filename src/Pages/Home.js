import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import { Outlet } from 'react-router-dom'
import FoodItem from '../Components/FoodItem'
export default function Home() {
  return (
    <div>
      <FoodItem/>
    </div>
  )
}
