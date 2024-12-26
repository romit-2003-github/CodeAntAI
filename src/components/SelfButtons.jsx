const SelfButtons = () => {
    return (
        <>
            <div className='flex flex-col gap-4 my-10 md:w-2/3 w-2/3 text-[12px] md:text-[15px]'>
                <button className='md:py-4 w-full font-bold rounded-lg bg-white py-2 border border-gray-400'><i className="fa-brands fa-gitlab text-orange-500"></i>  Self Hosted GitLab</button>
                <button className='md:py-4 w-full font-bold rounded-lg bg-white py-2 border border-gray-400'><i className="fa-solid fa-key"></i>  Sign in with SSO</button>
            </div>
        </>
    )
}

export default SelfButtons
