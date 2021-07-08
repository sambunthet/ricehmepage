// /*  ./components/Navbar.jsx     */
// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () => {
//   const [active, setActive] = useState(false);

//   const handleClick = () => {
//     setActive(!active);
//   };


//   return (
//     <div>
//       <div className="relative min-h-screen">
//         {/* <!-- mobile menu bar --> */}
//         <div
//           className={`bg-primary text-gray-100 flex justify-between ${
//             active ? "pl-64" : ""
//           }`}
//         >
//           {/* <!-- mobile menu button --> */}
//           {/* <!-- logo --> */}
//           <button
//             className={`mobile-menu-button p-4 focus:bg-green-900 ${
//               active ? "hidden" : ""
//             }`}
//             onClick={handleClick}
//           >
//             <svg
//               className="h-5 w-5"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* <!-- sidebar --> */}
//         <div
//           className={`sidebar bg-green-600 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 ${
//             active
//               ? "transform -translate-x-0  transition duration-200 ease-in-out"
//               : "transform -translate-x-full transition duration-200 ease-in-out"
//           }`}
//         >
//           {/* <!-- logo --> */}
//           <a href="#" className="text-white flex items-center space-x-2 px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               onClick={handleClick}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </a>

//           {/* <!-- nav --> */}
//           <nav>
//             <Link href="/">
//               <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
//                 Home
//               </a>
//             </Link>

//             <Link href="/products">
//               <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
//                 Products
//               </a>
//             </Link>
//             <Link href="/blogs">
//               <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
//                 Blogs
//               </a>
//             </Link>
//             <Link href="/aboutUs">
//               <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
//                 About Us
//               </a>
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <nav className="flex items-center flex-wrap bg-primary p-3 ">
//         <Link href="/">
//           <a className="inline-flex items-center p-2 mr-4 ">
//             <img
//                 src={"http://rice.com.kh/imgs/2/logo_03.png"}
//                 alt=""
//                 width={50}
//                 height={50}
//                 className="img-fluid d-block mx-auto"
//               />
//               <img
//                 src={"http://rice.com.kh/imgs/93/Untitled-1.png"}
//                 alt=""
//                 width={350}
//                 height={100}
//                 className="img-fluid d-block mx-auto hidden md:block"
//               />
//             {/* <span className="text-xl text-white font-bold uppercase tracking-wide">
//               Talwind CSS
//             </span> */}
//           </a>
//         </Link>
//         <button
//           className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
//           onClick={handleClick}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//         {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
//         <div
//           className={`${
//             active ? "" : "hidden"
//           }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
//         >
//           <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
//             <Link href="/">
//               <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
//                 Home
//               </a>
//             </Link>
//             <Link href="/">
//               <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
//                 Products
//               </a>
//             </Link>
//             <Link href="/blogs">
//               <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
//                 Blogs
//               </a>
//             </Link>
//             <Link href="/">
//               <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
//                 Contact us
//               </a>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from "next/link";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const people = [
  { id: 1, name: 'English', unavailable: false },
  { id: 2, name: ' 中文 ', unavailable: false },
]

const Navbar = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = useState(people[0]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menu = [
    {
      text: "Home",
      icon: <InboxIcon />,
      link: '/'
    },
    {
      text: "Products",
      icon: <MailIcon />,
      link: '/'
    },
    {
        text: 'Blogs',
        icon: <InboxIcon />,
        link: '/blogs'
    },
    {
      text: 'Recipe',
      icon: <InboxIcon />,
      link: '/recipe'
  },

  {
    text: 'Distributors',
    icon: <InboxIcon />,
    link: '/distributors'
  },
    {
        text: 'About Us',
        icon: <MailIcon />,
        link: '/'
    }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Link href="/">
              <a className="inline-flex items-center p-2 mr-4 ">
                <img
                    src={"http://rice.com.kh/imgs/2/logo_03.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="img-fluid d-block mx-auto"
                  />
                  <img
                    src={"http://rice.com.kh/imgs/93/Untitled-1.png"}
                    alt=""
                    width={350}
                    height={90}
                    className="img-fluid d-block mx-auto hidden md:block"
                  />
                {/* <span className="text-xl text-white font-bold uppercase tracking-wide">
                  Talwind CSS
                </span> */}
              </a>
            </Link>
          </Typography>
          <div className="grid justify-items-end w-full">
            <div>
            <div className=" w-28 top-16">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? 'text-gray-900' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
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
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menu.map((menu, index) => {
            const { text, icon, link } = menu;

            return (
                <Link href={link}>
                    <ListItem button key={text}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                    </ListItem>
                </Link>
              
            );
          })}
        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((menu, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}>
                <Link href="/blogs">{text}</Link>
              </ListItemText>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </main>
    </div>
  );
}

export default Navbar

