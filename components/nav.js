import React, { useState, Fragment, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import cookieCutter from 'cookie-cutter'

const language = [
  { id: 1, name: "Khmer", locale: "km"},
  { id: 2, name: "English", locale: "en"},
  { id: 3, name: " 中文 ", locale: "zh"},
];

function Nav() {
  const {pathname, locale, asPath, query} = useRouter();
  const {t} = useTranslation("common");
  const [sidebar, setSidebar] = useState(false);
  const [selected, setSelected] = useState(language.find(e=>e.locale===locale));
  const [show, hanldeShow] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const isDynamicPath = Object.keys(query).length > 0;
  const changeLocalePath = isDynamicPath ? pathname.split("/[")[0] : asPath;
  const handleScrollPos = () => {
    hanldeShow(window.scrollY > 100);
  };

  React.useEffect(() => {
    window.scrollTo(0, show);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, []);

  // console.log(router);

  return (
    <>
      <IconContext.Provider value={{}}>
        <div className={`nav ${(show || pathname !== '/') && "nav__white"}`}>
          <div className='flex'>
            <a className='menu-bars'>
              <FaIcons.FaBars
                onClick={showSidebar}
                className='nav__menu mt-1 sm:mt-4 md:mt-4'
              />
              {/* <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={showSidebar}
                edge='start'
                className='nav__menu mt-1 sm:mt-4 md:mt-4'
              >
                <MenuIcon />
              </IconButton> */}
            </a>
            <Link href='/'>
              <a className='inline-flex items-center'>
                <img
                  src={"http://rice.com.kh/imgs/2/logo_03.png"}
                  alt=''
                  width={40}
                  height={40}
                  className='img-fluid d-block mx-auto'
                />
                <img
                  src={"http://rice.com.kh/imgs/93/Untitled-1.png"}
                  alt=''
                  width={350}
                  height={90}
                  className='img-fluid d-block mx-auto hidden md:block'
                />
                {/* <span className="text-xl text-white font-bold uppercase tracking-wide">
                  Talwind CSS
                </span> */}
              </a>
            </Link>
          </div>

          <div>
            <Listbox
              value={selected}
              onChange={setSelected}
              className='nav__lang'
            >
              <div className='relative mt-1'>
                <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left'>
                  <span className='block truncate'>{selected.name}</span>
                  <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                    <SelectorIcon className='w-5 h-5' aria-hidden='true' />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5'>
                    {language.map((lang, langIdx) => (
                      <Listbox.Option
                        key={langIdx}
                        className={({ active }) =>
                          `${active ? "text-gray-900" : "text-gray-900"}
                            cursor-default select-none relative py-2 pl-10 pr-4`
                        }
                        value={lang}
                      >
                        {({ selected, active }) => (
                          <>
                            <Link
                              scroll={isDynamicPath && locale !== lang.locale}
                              href={locale === lang.locale ? asPath : changeLocalePath}
                              locale={lang.locale}>
                                <span
                                  onClick={()=>console.log('============ lang', lang.locale) && cookieCutter.set("NEXT_LOCALE", lang.locale)}
                                  className={`${
                                    selected ? "font-medium" : "font-normal"
                                  } block truncate`}
                                >
                                {lang.name}
                              </span>
                            </Link>
 
                            {selected ? (
                              <span
                                className={`${
                                  active ? "text-amber-600" : "text-amber-600"
                                }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon
                                  className='w-5 h-5'
                                  aria-hidden='true'
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-hrefggle'>
              <span className='menu-bars'>
                <AiIcons.AiOutlineClose width={30} height={50} />
              </span>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}>
                    <span>{item.icon}
                      <a>{" " + t(item.title)}</a>
                    </span>
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
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className='bg-white h-16 flex justify-start items-center z-auhref'>
          <Link href='/' className='ml-8 text-3xl bg-none'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav
          className={
            sidebar
              ? "bg-gray-800 w-64 h-screen justify-center fixed hrefp-0 left-0 duration-300 flex"
              : "bg-gray-800 w-64 h-screen justify-center fixed hrefp-0 -left-full duration-700 flex"
          }
        >
          <ul className='w-full' onClick={showSidebar}>
            <li className='bg-gray-800 w-full h-20 flex justify-start items-center'>
              <Link href='/'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className='flex justify-start items-center pt-2 pr-0 pb-2 pl-4 list-none h-14'
                >
                  <Link href={item.path}>
                    {/* {item.icon} */}
                    <span className='ml-4'>{t(item.title)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Nav;
