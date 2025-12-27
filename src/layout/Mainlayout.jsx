import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Mainlayout = () => {
    return (
        <main className="flex flex-col min-h-screen" >
            <Navbar />
            <div className='flex-grow'>
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default Mainlayout