import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { AgilityImage } from "@agility/nextjs";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`flex header${sticky ? " sticky" : ""}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
            <div>
              <AgilityImage
                src={"http://rice.com.kh/imgs/2/logo_03.png"}
                alt=""
                width={50}
                height={50}
                className="img-fluid d-block mx-auto"
              />
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature">Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/blogs">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;