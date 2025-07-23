import React from 'react'

const Login = () => {
  return (
    <div >
      <div className="bg-gray-200 flex items-center justify-center h-screen  flex-col text-gray-500">
        <div className='bg-gray-200 p-4'>
          <div className='pb-10 flex justify-center items-center'>
            <img className='w-30 h-30' src='https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.svg/1200px-Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.svg.png' alt='University logo'></img>
          </div>


          <div className=' bg-white flex flex-col gap-1 p-4 text- gray-600 shadow-xl'>


            <label className=' p-2 flex justify-center items-center pl-12 pr-12 bold-2'>Sign in to start your session</label>


            <select className="border-1 pl-2 pr-12 py-1 text-gray-500  border-gray-500">
              <option>Select Achademic Session</option>
              <option valu='' >2020–2021 </option>
              <option valu='' >2021–2022 </option>
              <option valu='' >2022–2023 </option>
              <option valu='' >2023–2024 </option>
              <option valu='' >2024–2025 </option>
            </select>


           

             <div className="relative border-1 border-gray-500">
              <input
                type="text"
                placeholder="Username"
                  className="w-[350px] pl-2 pr-12 py-1  "
              />
              
              
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <i className="fa-solid fa-envelope"></i>
              </span>
            </div>

             

            <div className="relative  border border-gray-500">
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-2 pr-12 py-1 "
              />
              
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <i className="fa-solid fa-lock"></i>
              </span>
            </div>


            
            <div className="relative   border border-gray-500">
              <input type='text' placeholder='Enter Captcha code'
              className='w-full pl-2 pr-12 py-1'/>
              <span className="absolute right-3 top-1 transform -transylate-y-1/2  text-gray-500">
                <i className="fa-solid fa-key"></i>
              </span>
            </div>
                
            

            <div class="flex justify-start">
              <button className=' ml-auto bg-blue-500 hover:bg-blue-600 transition duration-80 text-white pl-6 p-2 pr-6'>Sign In</button>
            </div>
            


            <p className='flex justify-center items-center'>-OR-</p>
            <a href='da' className='text-blue-500 '>Forgot  Password</a>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
