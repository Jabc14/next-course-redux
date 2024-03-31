import Image from 'next/image'
import { IoLogoReact, IoBrowsersOutline, IoCalculator, IoHeartOutline } from 'react-icons/io5';
import { GiAbstract034 } from "react-icons/gi";
import { SidebarMenuItem } from './SidebarMenuItem'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40}/>,
        title: "Dashboard",
        subTitle: "Principal"
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40}/>,
        title: "Counter",
        subTitle: "Contador"
    },
    {
        path: '/dashboard/pokemons',
        icon: <GiAbstract034 size={40}/>,
        title: "Pokèmon",
        subTitle: "Generación estática"
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={40}/>,
        title: "Favoritos",
        subTitle: "Pokèmon favoritos"
    },
]

export const Sidebar = () => {
  return (
    <div id="menu" style={{width: '400px'}} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
    <div id="logo" className="my-4 px-6">
     <h1 className="text-lg md:text-2xl font-bold text-white">
        
        <IoLogoReact className='mr-2'/>

       <span>Dash</span> 
        
        <span className="text-blue-500">8</span>.</h1>
     <p className="text-slate-500 text-sm">Manage your actions and activities</p>
    </div>
    <div id="profile" className="px-6 py-10">
     <p className="text-slate-500">Welcome back,</p>
     <a href="#" className="inline-flex space-x-2 items-center">
         <span>
             <Image className="rounded-full w-8 h-8" src="https://firebasestorage.googleapis.com/v0/b/webp-images-e9f6d.appspot.com/o/develsoft%2Fthumbnail%2FScreenShot-2022-7-10_1-38-35%20-%20copia.png.webp?alt=media&token=902ad822-a90e-44bc-b9d5-ed23c4c4febc" width={50} height={50} alt="image"/>
         </span>
         <span className="text-sm md:text-base font-bold">
            Jabc
         </span>
         </a>
    </div>

    <div id="nav" className="w-full px-6">
     
     {
        menuItems.map(item =>(
            <SidebarMenuItem
            key={item.path}
            {...item} />
            
        ))
     }   
     
    </div>
 </div>
    )
}
