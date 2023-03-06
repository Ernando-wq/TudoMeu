function App() {

  return (
    <div className="grid grid-cols-2  ">
      <div className="text-center rounded drop-shadow-lg  h-screen flex flex-col justify-center">
        <img src="https://www.shutterstock.com/image-photo/kiev-ukraine-november-16-2017-260nw-757799287.jpg" alt="" />
      </div>

      <div className="text-center h-screen items-center flex flex-col justify-center">
        <div className="drop-shadow-md flex flex-col justify-center items-center rounded h-96 w-96 bg-white">
          <img className="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEt1yqEM45eQ-9-JRcTIfDlC06yk1Oj01aA&usqp=CAU" alt="" />

          <div>
            <h2 className="mt-2 mb-2 font-medium flex">
              Sejam Bem Vindos
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
            </h2>
          </div>

          <div className="grid grid-cols-1   ">
            <div className=" flex w-36 justify-between ">
              <button className="   focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  drop-shadow-sm mt-3 mb-3 rounded ">
                <img className="w-7" src="https://t.ctcdn.com.br/essK16aBUDd_65hp5umT3aMn_i8=/400x400/smart/filters:format(webp)/i606944.png" alt="" />
              </button>
              <button className=" focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  drop-shadow-sm mt-3 mb-3 rounded w-8 h-8">
                <img className="w-7" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
              </button>
              <button className=" focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  drop-shadow-sm mt-3 mb-3 rounded w-8 h-8">
                <img className="w-7" src="https://t.ctcdn.com.br/eXQweorgzzB_ARsw7I9Bvp4O_Qg=/400x400/smart/filters:format(webp)/i489927.jpeg" alt="" />
              </button>
            </div>

          </div>


          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email" type="text" name="search" />
          </label>

          <label className="relative block mt-3">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password" type="text" />
          </label>

          <div className="mt-5" >

            <button className="w-72  rounded h-11 bg-blue-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">Login</button>

          </div>

        </div>
        
      </div>


      {/* <div className="bg-white text-center flex justify-center  items-center flex-col rounded h-96">
        
        <div className="bg-white h-72 w-72 rounded drop-shadow-md flex flex-col justify-center items-center" >
          <h1 className="mt-0" >Seja Bem vindo!</h1>

          <div >
            <input className="drop-shadow-md " placeholder="Email" type="text" />
            <input className="drop-shadow-md mt-2 " placeholder="Senha" type="text" />
          </div>
        </div>
      </div>

      <div className="bg-red-400 text-center flex justify-center  items-center flex-col rounded h-96">

        <div className="bg-white h-72 w-72 rounded shadow-slate-900 flex flex-col justify-center items-center" >
          <h1 className="mt-0" >Seja Bem vindo!</h1>

          <div >
            <input className="drop-shadow-md " placeholder="Email" type="text" />
            <input className="drop-shadow-md mt-2 " placeholder="Senha" type="text" />
          </div>
        </div>


      </div>
      <div className="bg-blue-500 text-center rounded"><h1>Chico tripa</h1></div>
      <div className="bg-green-400 text-center rounded"><h1>Chico tripa</h1></div> */}
    </div>
  )
}

export default App
