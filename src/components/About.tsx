"use client"

import Typewriter from "@/components/Typewriter";
import Image from "next/image"

export default function About() {

  const handleDownload = () => {
    fetch('curriculum.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'curriculum.pdf'
        alink.click()
      })
    })
  } 

  const handleGoToBottom = () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })
  }
  
  const handleGoToExp = () => {
    window.scrollTo({ left: 0, top: 850, behavior: "smooth" })
  }

  const handleGoToProj = () => {
    window.scrollTo({ left: 0, top: 1650, behavior: "smooth" })
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="md:shadow-md md:shadow-gray-500 grid md:grid-cols-2 gap-5 items-center md:border-2 md:border-gray-500 md:rounded-xl md:bg-gray-50 md:p-2 mt-10">
        <div className="flex text-gray-500">
          <p className="text-1xl ml-8 cursor-pointer">About</p>
          <p onClick={handleGoToExp} className="text-1xl ml-8 cursor-pointer">Experience</p>
          <p onClick={handleGoToProj} className="text-1xl ml-8 cursor-pointer">Projects</p>
          <p onClick={handleGoToBottom} className="text-1xl ml-8 cursor-pointer">Contact</p>
          <p></p>
        </div>
        <div className="flex justify-end">
          <a className="mr-3" href='https://www.linkedin.com/in/mikalai-grazzini-b6aa50203/' target="_blank"><Image src="/linkedin.png" height="40" width="40" alt="" /></a>
          <a className="mr-3" href='https://github.com/Emper-One'><Image src="/github.png" height="40" width="40" alt="" /></a> 
        </div>
      </div>
      <div className="flex items-center justify-center mt-28">
        <div className="md:shadow-md md:shadow-gray-500 grid md:grid-cols-2 gap-5 md:border-2 md:border-gray-500 md:rounded-xl md:bg-gray-50 md:p-10 w-full">
          <div className="flex flex-col items-center justify-center">
            <p className="text-1xl font-semibold mt-3">Hello, I'm</p>
            <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-gray-500">Mikalai Grazzini</p>
            <p className="text-2xl font-semibold mt-3">Web Developer</p>
            <p className="mt-3"> <Typewriter text="I like to craft solid and scalable frontend products with great user experiences." delay={100} /></p>
            <div>
              <button
                onClick={handleDownload} 
                className="border-2 rounded-full text-gray-500 border-gray-400 bg-gray-100 px-4 py-2 mt-10 text-1xl font-semibold transition-all duration-500 ease hover:bg-gray-950 hover:text-gray-100"
              >Download CV</button>
              <button 
                onClick={handleGoToBottom} 
                className="border-2 rounded-full text-gray-100 border-gray-950 bg-gray-950 px-4 py-2 mt-10 ml-3 text-1xl font-semibold transition-all duration-500 ease hover:bg-gray-100 hover:text-gray-950 hover:border-gray-400"  
              >Contact Me</button>
            </div>
          </div>
          <div className="relative flex w-full items-center justify-center">
            <Image 
              className="shadow-lg shadow-gray-500 border-0 rounded-full bg-gradient-to-r from-gray-500 to-gray-200"
              src="/niko.png" 
              alt="" 
              height={450}
              width={450}
            />
          </div>
        </div> 
      </div>
    </div>
  )
}
