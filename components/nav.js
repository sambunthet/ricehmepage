import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Link from "next/link";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link href='/' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-hrefggle'>
              <Link href='/' className='menu-bars'>
                <AiIcons.AiOutlineClose width={30} height={50} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}>
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='bg-white h-16 flex justify-start items-center z-auhref'>
          <Link href='/' className='ml-8 text-3xl bg-none'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'bg-gray-800 w-64 h-screen justify-center fixed hrefp-0 left-0 duration-300 flex' : 'bg-gray-800 w-64 h-screen justify-center fixed hrefp-0 -left-full duration-700 flex'}>
          <ul className='w-full' onClick={showSidebar}>
            <li className='bg-gray-800 w-full h-20 flex justify-start items-center'>
              <Link href='/'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className='flex justify-start items-center pt-2 pr-0 pb-2 pl-4 list-none h-14'>
                  <Link href={item.path}>
                    {/* {item.icon} */}
                    <span className='ml-4'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Nav;