import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';


const RepoContainer = ({ user, setUser }) => {
    const [repoCount, setRepoCount] = useState(0);
    const [repos, setRepos] = useState([]);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [currPage, setCurrPage] = useState(1);

    const itemsPerPage = 4;

    const handleChange = (event) => {
        setUser(event.target.value);
    }

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await axios.get(`https://api.github.com/users/${user}/repos`);
                setRepos(res.data);
                setRepoCount(res.data.length);
            } catch (err) {
                console.log(err);
            }
        };

        fetchRepos();
    }, [user]);


    const totalPages = Math.ceil(repoCount / itemsPerPage);
    const lastIdx = currPage * itemsPerPage;
    const firstIdx = lastIdx - itemsPerPage;

    const currRepos = repos.slice(firstIdx, lastIdx);

    const paginate = (pageNo) => {
        setCurrPage(pageNo);
    }

    const label = (
        <>
            <i className="fa-solid fa-magnifying-glass"></i>  Search Repositories
        </>
    );


    return (
        <>
            <div className={`flex flex-col justify-between lg:hidden p-4 bg-white rounded-b-none rounded-md shadow-lg`}>
                <div className="flex justify-between items-center w-full">

                    <div className="flex items-center space-x-2 font-bold text-3xl">
                        <img src={logo} alt="loading" className="h-12 w-12" />
                        <span>CodeAnt AI</span>
                    </div>

                    <div>
                        {dropDownOpen ? <i className="fa-solid fa-xmark" onClick={() => setDropDownOpen(!dropDownOpen)}></i> : <i className="fa-solid fa-bars" onClick={() => setDropDownOpen(!dropDownOpen)}></i>}

                        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Dropdown
                        </button> */}
                    </div>
                </div>
                {dropDownOpen && (
                    <div className="relative z-50">
                        <div className='px-6 w-full pt-6'>
                            <Select
                                className='w-full h-10 px-auto mx-auto rounded-3xl'
                                labelId="User"
                                id="User"
                                value={user}
                                label="User"
                                onChange={handleChange}
                            >
                                <MenuItem value='romit-2003-github'>romit-2003-github</MenuItem>
                                <MenuItem value='NamanChaudhary1'>NamanChaudhary1</MenuItem>
                                <MenuItem value='Dj2801'>Dj2801</MenuItem>
                            </Select>
                        </div>
                        <div className='flex flex-col items-center justify-center h-5/6'>
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
                                    <li className="flex items-center space-x-2 px-4 h-10 hover:bg-blue-700 hover:text-white hover:rounded-lg">
                                        <i className="fa-solid fa-phone"></i>
                                        <span className='font-medium'>Support</span>
                                    </li>
                                    <Link to='/'><li className="flex items-center space-x-2 px-4 h-10 hover:bg-blue-700 hover:text-white hover:rounded-lg">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        <span className='font-medium'>Logout</span>
                                    </li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="z-10 bg-white h-auto rounded-xl rounded-t-none border border-gray-400 shadow-lg">
                <header className="flex justify-between flex-col lg:flex-row px-6 py-4 md:mt-4">
                    <div>
                        <h1 className="text-3xl font-semibold">Repositories</h1>
                        <h3>{repoCount} total repositories</h3>
                    </div>
                    <div className="flex flex-row items-center text-[12px] md:text-[15px]">
                        <button className="lg:mx-2 my-4 bg-white text-black cursor-pointer border border-gray-400 py-2 px-4 rounded-lg space-x-2"><i className="fa-solid fa-arrows-rotate"></i><span>Refresh All</span></button>
                        <button className="lg:mx-4 m-4 bg-blue-600 text-white cursor-pointer py-2 px-4 rounded-lg space-x-2"><i className="fa-solid fa-plus"></i><span>Add Repository</span></button>
                    </div>
                </header>



                {/* -------- */}
                <section className="px-6 pb-6 border-b border-gray-300">
                    <TextField className="md:w-1/3 w-full rounded-xl" id="outlined-basic" label={label} variant="outlined" />
                </section>
                {/* -------- */}
                <section className="repos">
                    <div className="flex flex-col border-b border-gray-400">
                        {currRepos.map((repo, index) => {
                            return (
                                <>
                                    <div key={index} className="flex flex-col border-b px-6 border-gray-400 py-4 hover:bg-gray-100">
                                        <div className="flex space-x-4 items-center lg:text-xl md:text-[16px]">
                                            <h1 className="font-semibold ">{repo.name}</h1>
                                            <Chip label={`${repo.visibility.charAt(0).toUpperCase() + repo.visibility.slice(1)}`} color="primary" variant="outlined" />
                                        </div>
                                        <div className="flex space-x-12 items-center py-4 lg:text-[16px] md:text-[12.5px] text-[12.5px]">
                                            <h1 className="space-x-2">{repo.language ? repo.language : 'Undefined'}<span className="inline-block w-2 h-2 mx-2 bg-blue-700 rounded-full"></span></h1>
                                            <h1><i className="fa-solid fa-database"></i><span>  {repo.size} KB</span></h1>
                                            <h1>Updated {Math.floor((new Date() - new Date(`${repo.updated_at}`)) / (1000 * 60 * 60 * 24))} days ago</h1>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </section>
                <div className="flex justify-between items-center space-x-4 m-4">
                    <button className="w-20 h-8 bg-blue-700 rounded-md text-white"
                        onClick={() => paginate(currPage - 1)}
                        disabled={currPage === 1}
                    >&larr; Prev</button>
                    <button className="w-20 h-8 bg-blue-700 rounded-md text-white"
                        onClick={() => paginate(currPage + 1)}
                        disabled={currPage === totalPages}
                    >Next &rarr;</button>
                </div>


            </div>
        </>
    )
}

RepoContainer.propTypes = {
    user: PropTypes.string.isRequired,
    setUser: PropTypes.func.isRequired,
};

export default RepoContainer

