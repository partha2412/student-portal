import React from 'react'

const Signup2 = () => {
  return (
    <div>
        <h1>this is home</h1>
        <div class='flex  h-screen w-screen items-center justify-center  '>
        <div className='border-2 border-emerald-600 p-20'  >
        <form className='flex flex-col items-center justify-center'>
            <input className='text-black outline-none border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-400' type='email' placeholder='Enter your email' />
            <input className='text-black outline-none border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-400 mt-5' type='password' placeholder='Enter password' />
            <button
                type='submit' className='bg-amber-300 hover:bg-amber-400 text-black font-semibold rounded-full text-xl px-6 py-3 mt-5 transition-all duration-300'>
                Login
            </button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Signup2