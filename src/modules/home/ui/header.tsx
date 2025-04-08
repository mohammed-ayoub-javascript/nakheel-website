import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const Header = () => {
  const routes =[
    {
        title:'الرئيسية',
        route:"/",
    },
    {
        title:"من نحن",
        route:"/about-us",
    },
    {
        title:"تواصل معنا",
        route:"/contact-us",
    },
  ];
  return (
<div className="w-full max-w-7xl mx-auto backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 px-4 md:px-8 py-3 m-3 flex justify-between items-center">
  
  <div className="flex items-center">
    <img 
      src="https://cdn.discordapp.com/icons/1358814759780356228/ed14823a2bf15dd2a25e13334a88394a.webp?size=64" 
      alt="Logo" 
      className="rounded-lg shadow-md w-12 h-12 md:w-14 md:h-14 transition hover:scale-110"
    />
  </div>

  <div className="flex gap-4 md:gap-6 items-center">
    {routes.map((item) => (
      <Link 
        key={item.route}
        href={item.route}
        className="text-lg md:text-xl font-medium text-gray-800 hover:text-cyan-600 
                 px-4 py-2 rounded-lg transition-all duration-300
                 hover:bg-white/30 hover:backdrop-blur-sm"
      >
        {item.title}
      </Link>
    ))}
  </div>

  <div className="flex items-center">
    <Button
      variant={"ghost"}
      className="p-3 border border-white/30 bg-white/20 rounded-xl shadow-md
               hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 
               hover:shadow-xl hover:border-transparent transition-all duration-300"
    >
      <img 
        width={30} 
        height={30} 
        src="https://cdn.iconscout.com/icon/free/png-256/free-discord-logo-icon-download-in-svg-png-gif-file-formats--social-network-media-pack-logos-icons-3357697.png" 
        alt="Discord" 
        className="hover:scale-110 transition-transform"
      />
    </Button>
  </div>
</div>
  )
}

export default Header