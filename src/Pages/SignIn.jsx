import { useState } from "react"
import SaasButtons from "../components/SaasButtons";
import SelfButtons from "../components/SelfButtons";
import logo from '../assets/logo.png'
import subtract from '../assets/subtract.png'
import circle from '../assets/circle.png'
const SignIn = () => {

    const [activeTab, setActiveTab] = useState('saas');
    return (
        <>
            <div className="flex items-center justify-between h-screen">
                <div className="border-r-4 shadow-lg border-yellow-300 hidden lg:block justify-center items-center h-full md:w-full">
                    <div className=" flex flex-col justify-center items-center h-screen">
                        <div className="md:bg-white md:p-4 md:rounded-3xl md:shadow-2xl md:border md:border-gray-300 md:w-[447px] h-[170px]">
                            <div className="text-xl flex font-bold items-center border-b border-gray-300 pb-4">
                                <img src={logo} alt="loading" />
                                <span>AI to Detect & Autofix Bad Code</span>
                            </div>
                            <div className="flex justify-center items-center my-4 mx-6">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="font-extrabold">30+</h1>
                                    <h1 className="text-[14px]">Language Support</h1>
                                </div>
                                <div className="flex flex-col items-center justify-center px-12">
                                    <h1 className="font-extrabold">10K+</h1>
                                    <h1 className="text-[14px]">Developers</h1>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="font-extrabold">100K+</h1>
                                    <h1 className="text-[14px]">Hours Saved</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around bg-white py-4 px-2 rounded-3xl shadow-2xl w-[270px] h-[164px] border border-gray-200" style={{ marginLeft:"32%", marginTop:"-2%", zIndex:"1" }}>
                            <div className="flex flex-col ml-4 items-start justify-center">
                                <img src={circle} className="w-16 pb-4" alt="loading" />
                                <h1 className="font-extrabold text-[13px]">Issues Fixed</h1>
                                <h1 className="font-bold text-4xl">500K+</h1>
                            </div>
                            <div>
                                <h1 className="text-blue-900 font-extrabold"><i className="fa-solid fa-arrow-up"></i> 14%</h1>
                                <h1 className="text-[15px]">This week</h1>
                            </div>
                        </div>
                    </div>
                        <img src={subtract} className="h-[225px] w-[250px]" style={{margin:"-15vw 0"}} alt="loading" />
                </div>
                {/* ----------- */}
                <div className="flex flex-col items-center justify-center h-[276px] ">
                    <div className="bg-white flex flex-col justify-center items-center h-auto w-screen lg:w-[40vw] rounded-2xl shadow-lg mx-10">
                        <div className="pt-8 text-2xl flex items-center"><img src={logo} alt="loading" /><span>CodeAnt AI</span></div>
                        <h1 className="py-6 md:text-2xl font-bold">Welcome to CodeAnt AI</h1>
                        <div className="flex justify-center items-center md:w-[90%] w-2/3 border-b border-gray-500">
                            <button className={` md:w-full w-2/3 font-bold py-2 md:py-4 px-4 rounded-md ${activeTab === 'saas' ? 'bg-[#1570EF] text-white' : 'bg-gray-100 text-black'
                                }`} onClick={() => setActiveTab('saas')}>SAAS</button>
                            <button className={`md:w-full w-2/3 font-bold py-2 md:py-4 px-4 rounded-md ${activeTab === 'self' ? 'bg-[#1570EF] text-white' : 'bg-gray-100 text-black'
                                }`} onClick={() => setActiveTab('self')}>Self Hosted</button>
                        </div>
                        {activeTab === 'saas' ? <SaasButtons /> : <SelfButtons />}
                    </div>
                    <h2 className="md:my-4 mt-8 md:text-[15px] text-[12px]">By signing up you agree to the <span className="font-bold">Privacy Policy.</span></h2>
                </div>
            </div >
        </>
    )
}

export default SignIn