import { useState } from 'react';
import logo from '../assets/logo.png'
// import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import RepoContainer from './RepoContainer';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [user, setUser] = useState('romit-2003-github');

    const handleChange = (event) => {
        setUser(event.target.value);
    }

    console.log(user);
    return (
        <>
        <div className='flex items-center h-screen'>
            <aside className="lg:w-[20vw] md:w-[30vw] hidden flex-col items-center justify-center lg:block bg-white h-screen border-r-2 border-gray-300">

                <div className="p-4 lg:text-xl md:text-[15px] flex items-center font-bold"><img src={logo} alt="loading" /><span>CodeAnt AI</span></div>

                <div className='px-6'>
                    <Select
                        className='w-full h-10 px-auto mx-auto rounded-3xl'
                        labelId="User"
                        id="User"
                        value={user}
                        displayEmpty
                        onChange={handleChange}
                    >
                        <MenuItem value='romit-2003-github'>romit-2003-github</MenuItem>
                        <MenuItem value='NamanChaudhary1'>NamanChaudhary1</MenuItem>
                        <MenuItem value='Dj2801'>Dj2801</MenuItem>
                    </Select>
                </div>
                <div className='flex flex-col items-center justify-between h-5/6 cursor-pointer'>
                    <div className="w-full">
                        <ul className="space-y-2 p-4 my-2">
                            <li className="flex items-center space-x-2 px-4 h-10 hover:bg-blue-700 hover:text-white hover:rounded-lg">
                                <i className="fa-solid fa-house"></i>
                                <span className='font-medium'>Repositories</span>
                            </li>
                            <li className="flex items-center space-x-2 px-4 h-10 hover:bg-blue-700 hover:text-white hover:rounded-lg">
                                <i className="fa-solid fa-code"></i>
                                <span className='font-medium'>AI Code Review</span>
                            </li>
                            <li className="flex items-center space-x-2 px-4 h-10 hover:bg-blue-700 hover:text-white hover:rounded-lg">
                                <i className="fa-solid fa-cloud"></i>
                                <span className='font-medium'>Cloud Security</span>
                            </li>
                            <li className="flex items-center space-x-2 px-4 h-10 hover:bg-blue-700 hover:text-white hover:rounded-lg">
                                <i className="fa-solid fa-list"></i>
                                <span className='font-medium'>How to Use</span>
                            </li>
                            <li className="flex items-center space-x-2 px-4 h-10 hover:bg-blue-700 hover:text-white hover:rounded-lg">
                                <i className="fa-solid fa-gear"></i>
                                <span className='font-medium'>Settings</span>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <ul className='space-y-2 p-4 my-4'>
                            <li className='flex items-center space-x-2 px-4 h-10 hover:bg-blue-700 hover:text-white hover:rounded-lg'>
                                <i className="fa-solid fa-phone"></i>
                                <span className='font-medium'>Support</span></li>
                            <Link to='/'><li className='flex items-center space-x-2 px-4 h-10 hover:bg-blue-700 hover:text-white hover:rounded-lg'>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <span className='font-medium'>Logout</span>
                            </li></Link>
                        </ul>
                    </div>
                </div>
            </aside>

            <div className='repos h-full lg:w-[80vw] w-full p-6'>
                <RepoContainer user={user} setUser={setUser}/>
            </div>
        </div>
        </>
    )
}

export default Sidebar
