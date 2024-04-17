import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import { Outlet } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
