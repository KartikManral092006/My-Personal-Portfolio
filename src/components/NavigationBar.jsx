import {useState,useEffect} from 'react'
import {cn} from "@/lib/utils.js"
import { Menu, X } from 'lucide-react';

const navItems = [{
    name: "Home" , href :"#hero"},
    {
        name: "About" , href :"#about"},
        {
            name: "Skills" , href :"#skills"},
        {
            name: "Projects" , href :"#projects"},
            {
                name: "Contact" , href :"#contact"},
]
export const NavBar = () =>{
    const[isScrolled, setIsScrolled] =useState(false);
    const [isMenuOpened ,setIsMenuOpened] = useState(true);
    useEffect(()=>{
        const handelScroll = () => {
           setIsScrolled(window.screenY >10);
        };

        window.addEventListener('scroll', handelScroll);
        return () => {
            window.removeEventListener('scroll', handelScroll);
        };
    },[])
    return (

        <nav className = {cn("fixed w-full z-40 transition-all duration-300" ,
             isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs " : "py-5" )} >

            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Kartik's </span> Portfolio
                    </span>
                </a>

                {/* Desktop navber*/}

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item,key) =>(
                        <a key={key} className="text-foreground/80  hover:text-primary transition-colors duration-300" href={item.href}>{item.name}</a>
                    ))}
                </div>

                {/* Mobile nav */}

                <button onClick={()=>setIsMenuOpened((prev) => !prev)}
                 className='md:hidden p-2 text-foreground z-50' aria-label={isMenuOpened ? "close menu" : "open menu"}>
                    {isMenuOpened ? <X size={24} /> : < Menu size={24}/>}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col item-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item,key) =>(
                            <a key={key} className="text-foreground/80  hover:text-primary transition-colors duration-300" href={item.href} onClick="setIsMenuOpened(false)">{item.name}</a>
                        ))}
                    </div>

                </div>
            </div>

             </nav>

    )

}
