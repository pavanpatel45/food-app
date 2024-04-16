import React from 'react'
import { Link } from 'react-router-dom';
// import file from '../Images/file.png';
export default function Navbar() {
    return (
        <div className='flex flex-row justify-between m-2 px-4 py-2 border-2'>
            <div>Logo</div>
            <Link to="/bookmark"><div className='relative bottom-9 left-96 cursor-pointer'>
                {/* <img src={file} /> */}
            </div>
            </Link>
        </div>
    )
}
