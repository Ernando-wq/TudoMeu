function App() {
  return (
    <div className="grid grid-cols-2 h-screen">

      <div className="">
        <h1>A</h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="h-[30rem] w-[27rem] flex-col justify-center items-center flex bg-white drop-shadow-lg">
          <div className="">
            Titulo
          </div>

          <div>
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email" type="text" name="search" />
            </label>
          </div>

          <div>
            <label className="relative block mt-3">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </span>
              <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password" type="text" />
            </label>
          </div>

          <div className="mt-3">
              <button  className="bg-zinc-400 mt-3 rounded w-[17rem] h-[2rem] focus:outline-none  focus:ring-sky-500 focus:ring-2 ">Entrar</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
