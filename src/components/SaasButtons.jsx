import { Link } from "react-router-dom"

const SaasButtons = () => {
    return (
        <>
            <div className='flex flex-col gap-4 my-10 md:w-2/3 w-2/3 text-[12px] md:text-[15px]'>
                <Link to='/repos'><button className='md:py-4 w-full font-bold rounded-lg bg-white py-2 border border-gray-400'><i className="fa-brands fa-github"></i>  Sign in with GitHub</button></Link>
                <button className='md:py-4 font-bold rounded-lg bg-white py-2 border border-gray-400'><i className="fa-brands fa-bitbucket text-blue-500"></i>  Sign in with BitBucket</button>
                <button className='md:py-4 font-bold rounded-lg bg-white py-2 border border-gray-400'><i className="fa-brands fa-bitbucket text-blue-500"></i>  Sign in with Azure Devops</button>
                <button className='md:py-4 font-bold rounded-lg bg-white py-2 border border-gray-400'><i className="fa-brands fa-gitlab text-orange-500"></i>  Sign in with GitLab</button>
            </div>
        </>
    )
}

export default SaasButtons
