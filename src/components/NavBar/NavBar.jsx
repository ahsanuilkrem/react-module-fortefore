import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu, IoMdClose  } from "react-icons/io";



const NavBar = () => {

  const [open, setOpen] = useState(false)



    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About Us', path: '/about' },
        { id: 3, name: 'Our Services', path: '/services' },
        { id: 4, name: 'Contact Us', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' }
      ];
      
    return (
       <>
       <nav className="max-w-7xl mx-auto mb-7">

       <div onClick={() => setOpen(!open)} className="md:hidden text-2xl text-indigo-500 px-5">

        {
          open === true ? <IoMdClose></IoMdClose>:<IoMdMenu></IoMdMenu>
        }


 
       </div>

          <ul className={`md:flex absolute px-10 duration-1000 ${open ? "top-28" : '-top-60'}`}>
          {
                routes.map(route => <Link  key={route.id} route={route}></Link>)
            }
          </ul>
       </nav>
       
       </>
    );
};

export default NavBar;