'use client'

import Image from "next/image"
import { useState } from "react"

const html = [
  {id: 1, src: '/html-5.png', title: 'HTML', rank: 'Experienced'}
]

const css = [
  {id: 1, src: '/css-3.png', title: 'CSS', rank: 'Good'},
  {id: 2, src: '/bootstrap.png', title: 'Bootstrap', rank: 'Intermediate'}
]

const front = [
  {id: 1, src: '/js.png', title: 'Javascript', rank: 'Intermediate'},
  {id: 2, src: '/next.svg', title: 'NextJs', rank: 'Intermediate'},
  {id: 3, src: '/physics.png', title: 'ReactJs', rank: 'Intermediate'},
  {id: 4, src: '/redux-icon.png', title: 'Redux', rank: 'Basic'}
]

const back = [
  {id: 1, src: '/nodejs.png', title: 'NodeJs', rank: 'Intermediate'},
  {id: 2, src: '/database.png', title: 'Postgress', rank: 'Basic'},
  {id: 3, src: '/firebase.png', title: 'Firebase', rank: 'Basic'},
  {id: 4, src: '/prisma.png', title: 'Prisma', rank: 'Intermediate'},
  {id: 5, src: '/sequelize.png', title: 'Sequelize', rank: 'Basic'}
]

const blockchain = [
  {id: 1, src: '/blockchain.png', title: 'Solidity', rank: 'Intermediate'},
  {id: 2, src: '/web-30.png', title: 'Web3', rank: 'Intermediate'}
]

const other = [
  {id: 1, src: '/github.png', title: 'Github', rank: 'Basic'},
  {id: 2, src: '/gitlab.png', title: 'Gitlab', rank: 'Basic'}
]

const Skills = () => {
  const [skills, setSkills] = useState({item: 'HTML', rank: 'Experienced'})

  const handleSelectItem = (item: string, rank: string) => {
    setSkills({item, rank})
  }


  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mt-10">
        <p className="font-semibold">Explore My</p>
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-gray-500">Experience</h2>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="md:shadow-md md:shadow-gray-500 grid md:grid-cols-2 gap-5 w-full md:border-2 md:border-gray-500 md:rounded-xl md:p-10 md:bg-gray-50">
          <div className="flex flex-col">
            <div className="flex">
              {html.map((item) => {
                return (
                <div 
                  key={item.id} 
                  onClick={(e) => {
                    e.preventDefault()
                    handleSelectItem(item.title, item.rank)
                  }} 
                  className={`shadow-lg shadow-gray-500 cursor-pointer flex items-center border-2 rounded-full border-gray-400 p-3 m-2 ${skills.item === item.title ? 'bg-gray-400' : 'bg-gray-100'}`}
                >
                  <Image className="" src={item.src} height="50" width="50" alt="html" />
                </div>
                )
              })}
            </div>
            <div className="flex">
              {css.map((item) => {
                return (
                <div 
                  key={item.id} 
                  onClick={(e) => {
                    e.preventDefault()
                    handleSelectItem(item.title, item.rank)
                  }}  
                  className={`shadow-lg shadow-gray-500 cursor-pointer flex items-center border-2 rounded-full border-gray-400 p-3 m-2 ${skills.item === item.title ? 'bg-gray-400' : 'bg-gray-100'}`}
                >
                  <Image className="" src={item.src} height="50" width="50" alt="html" />
                </div>
                )
              })}
            </div>
            <div className="flex">
              {front.map((item) => {
                return (
                <div 
                  key={item.id} 
                  onClick={(e) => {
                    e.preventDefault()
                    handleSelectItem(item.title, item.rank)
                  }}                  
                  className={`shadow-lg shadow-gray-500 cursor-pointer flex items-center border-2 rounded-full border-gray-400 p-3 m-2 ${skills.item === item.title ? 'bg-gray-400' : 'bg-gray-100'}`}
                >
                  <Image className="" src={item.src} height="50" width="50" alt="html" />
                </div>
                )
              })}
            </div>
            <div className="flex">
              {back.map((item) => {
                return (
                <div 
                  key={item.id} 
                  onClick={(e) => {
                    e.preventDefault()
                    handleSelectItem(item.title, item.rank)
                  }}                  
                  className={`shadow-lg shadow-gray-500 cursor-pointer flex items-center border-2 rounded-full border-gray-400 p-3 m-2 ${skills.item === item.title ? 'bg-gray-400' : 'bg-gray-100'}`}
                >
                  <Image className="" src={item.src} height="50" width="50" alt="html" />
                </div>
                )
              })}
            </div>
            <div className="flex">
              {blockchain.map((item) => {
                return (
                <div 
                  key={item.id} 
                  onClick={(e) => {
                    e.preventDefault()
                    handleSelectItem(item.title, item.rank)
                  }}                  
                  className={`shadow-lg shadow-gray-500 cursor-pointer flex items-center border-2 rounded-full border-gray-400 p-3 m-2 ${skills.item === item.title ? 'bg-gray-400' : 'bg-gray-100'}`}
                >
                  <Image className="" src={item.src} height="50" width="50" alt="html" />
                </div>
                )
              })}
            </div>
            <div className="flex">
              {other.map((item) => {
                return (
                <div 
                  key={item.id} 
                  onClick={(e) => {
                    e.preventDefault()
                    handleSelectItem(item.title, item.rank)
                  }}                  
                  className={`shadow-lg shadow-gray-500 cursor-pointer flex items-center border-2 rounded-full border-gray-400 p-3 m-2 ${skills.item === item.title ? 'bg-gray-400' : 'bg-gray-100'}`}
                >
                  <Image className="" src={item.src} height="50" width="50" alt="html" />
                </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="shadow-lg shadow-gray-500 h-[250px] w-[250px] flex flex-col items-center justify-center border-2 rounded-full border-gray-400 bg-gray-100 mt-5">
              <p className="text-1xl font-semibold text-gray-500">{skills.item}</p>
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-gray-500">{skills.rank}</p>
            </div>
            <div className="shadow-lg shadow-gray-500 h-[250px] w-[250px] flex flex-col items-center justify-center border-2 rounded-full border-gray-400 bg-gray-100 mt-5">
              <p className="text-2xl font-semibold text-gray-500">EXPERIENCE</p>
              <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-gray-500">2+</p>
              <p className="text-2xl">years</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Skills