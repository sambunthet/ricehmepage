import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'products',
    path: '/products',
    icon: <FaIcons.FaProductHunt />,
    cName: 'nav-text'
  },
  {
    title: 'blog',
    path: '/blogs',
    icon: <FaIcons.FaBlogger />,
    cName: 'nav-text'
  },
  {
    title: 'recipes',
    path: '/recipe',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'distributor',
    path: '/distributors',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'about',
    path: '/aboutUs',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
];