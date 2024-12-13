import {useState} from "react";
import { Link } from 'react-router-dom';
import MobileMenu from "../MobileMenu/MobileMenu";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full border-b border-[#c0c2c3] bg-white">
        <header className='max-w-[1240px] mx-auto flex p-5 items-center justify-between gap-1'>
            <div>
                <Link to={`/`} className='uppercase text-4xl font-bold'>TodoList</Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex font-semibold  text-xl md:text-lg lg:text-2xl">
                <Link to={`/`} className="p-3">Todolist</Link>
                <Link className="p-3">About us</Link>
              </ul>
            </div>
            <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="flex md:hidden ml-auto  cursor-pointer z-30">
                { isMobileMenuOpen ? <AiOutlineClose size = {35}/> : <AiOutlineMenu size={35} />}
            </div>
            <MobileMenu isOpen={isMobileMenuOpen}/>
        </header>
    </div>
  )
}

export default Header



