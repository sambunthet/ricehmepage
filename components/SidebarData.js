import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { getLocaletext } from "$/utils/localization";

export const SidebarData = [
  {
    title: getLocaletext('home'),
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: getLocaletext('products'),
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: getLocaletext('blog'),
    path: '/blogs',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: getLocaletext('recipes'),
    path: '/recipe',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: getLocaletext('distributor'),
    path: '/distributors',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: getLocaletext('about'),
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];