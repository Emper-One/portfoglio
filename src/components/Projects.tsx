import Image from "next/image"

const Projects = () => {

  const work = [
    {id: 1, site: 'https://www.scouterz.io', bg: '/scouterz.png', bio: '1st Sports NFT Community'},
    {id: 2, site: 'https://shop.ermesconsultingomniverse.it', bg: '/ermesplag.png', bio: 'Create plagin for Wordpress'},
    {id: 3, site: 'https://app.ermesconsultingomniverse.it', bg: '/ermes.png', bio: 'Create Wallet'},
    {id: 4, site: 'https://xperto.xriba.com', bg: '/xriba.png', bio: 'MLM Site'}
  ]

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center">
        <p className="font-semibold">Browse My Recent</p>
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-gray-500">Projects</h2>
      </div>      
      <div className="md:shadow-md md:shadow-gray-500 grid md:grid-cols-2 gap-10 md:border-2 md:border-gray-500 md:rounded-xl md:p-10 md:bg-gray-50 w-full mt-10">
        {work.map((item) => {
          return (
            <div className="shadow-lg shadow-gray-500 relative flex flex-col items-center border-2 rounded-lg border-gray-400 bg-gray-50 p-2 md:ml-24 md:mr-24 bg-gradient-to-r from-gray-500 to-gray-200" key={item.id}>
              <Image
                src={item.bg}
                alt=""
                className="rounded-lg"
                height={250}
                width={350}
              />
              <div className="w-full flex items-center justify-end mt-2">
                <p>{item.bio}</p>
                <a 
                  className="ml-3 border-2 rounded-full text-gray-500 border-gray-400 bg-gray-100 px-4 py-2 text-1xl font-semibold transition-all duration-500 ease hover:bg-gray-950 hover:text-gray-100"
                  href={item.site} 
                  target='_blank'
                >
                  Visit Site
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects