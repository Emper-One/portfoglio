import Image from "next/image"

const Contact = () => {

  return (
    <>
    <div className="min-h-[90vh] relative">
      <div className="flex flex-col items-center mt-10">
        <p className="font-semibold">Get In Touch</p>
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-gray-500">Contact Me</h2>
      </div>      
      <div className="md:shadow-md md:shadow-gray-500 grid md:grid-cols-2 gap-5 w-full md:border-2 md:border-gray-500 md:rounded-xl md:p-10 bg-gray-50 mt-20">
        {/* <form>
          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <input type="text" id="first_name" className="shadow-lg shadow-gray-500 bg-gray-100 border border-gray-300 text-gray-900 text-1xl rounded-full focus:ring-gray-600 focus:border-gray-600 focus-visible:outline-none block w-full p-3" placeholder="Name" />
            </div>
            <div>
              <input type="text" id="last_name" className="shadow-lg shadow-gray-500 bg-gray-100 border border-gray-300 text-gray-900 text-1xl rounded-full focus:ring-gray-600 focus:border-gray-600 focus-visible:outline-none block w-full p-3" placeholder="Surname" />
            </div>
          </div>
          <div className="mb-4">
              <input type="email" id="email" className="shadow-lg shadow-gray-500 bg-gray-100 border border-gray-300 text-gray-900 text-1xl rounded-full focus:ring-gray-600 focus:border-gray-600 focus-visible:outline-none block w-full p-3" placeholder="Email" />
          </div> 
          <div className="mb-4">
              <textarea rows="4" className="shadow-lg shadow-gray-500 bg-gray-100 border border-gray-300 text-gray-900 text-1xl rounded-lg focus:ring-gray-600 focus:border-gray-600 focus-visible:outline-none block w-full p-3" placeholder="Content" />
          </div> 
          <button className="w-full border-2 rounded-full text-gray-100 border-gray-950 bg-gray-950 px-4 py-2 text-1xl font-semibold transition-all duration-500 ease hover:bg-gray-100 hover:text-gray-950 hover:border-gray-400">Send</button>
        </form> */}
        <div className="flex items-center justify-center">
           <div className="cursor-pointer group flex items-center justify-center border-2 border-gray-500 bg-gray-100 rounded-lg p-10 transition-all duration-500 ease hover:bg-gray-300 shadow-lg shadow-gray-500 w-full">
              <p className="group-hover:hidden text-2xl font-semibold">Email</p>
              <p className="hidden group-hover:inline-block text-2xl font-semibold">one.emper@gmail.com</p>
              <span className="material-symbols-outlined ml-1">mail</span>
           </div>
        </div>
        <div className="flex items-center justify-center">
           <div className="cursor-pointer flex items-center justify-center border-2 border-gray-500 bg-gray-100 rounded-lg p-10 transition-all duration-500 ease hover:bg-gray-300 shadow-lg shadow-gray-500 w-full">
              <p className="text-2xl font-semibold">Linkedin</p>
              <Image src="/linkedin.png" height="30" width="30" alt="" />
           </div>
        </div>
      </div>
    </div>
    <footer className="shadow-md shadow-gray-500 border-2 border-gray-500 bg-gray-50 rounded-lg mt-3 mb-3">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Emper. All Rights Reserved.
      </span>
      </div>
    </footer>
  </>
  )
}

export default Contact