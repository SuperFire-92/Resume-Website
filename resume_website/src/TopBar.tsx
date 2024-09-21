import { useState } from 'react'
import './TopBar.css'
import logo from '/assets/logo.png'

interface TopBarProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

function TopBar({setPage}: TopBarProps) {
    return (
        <div id='background' className='container'>
            <div className='row'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='row'></div>
            <div className='row' id='buttonRow'>
                <button className='button' onClick={() => setPage(0)}>Home</button>
                <button className='button' onClick={() => setPage(1)}>Projects</button>
                <button className='button' onClick={() => setPage(2)}>Jobs</button>
            </div>
        </div>
    )
}

export default TopBar