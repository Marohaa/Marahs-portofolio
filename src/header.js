import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; // Ensure this imports your CSS
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header with dynamic background */}
      <Navbar
        
        expand="lg"
        className={`header ${isScrolled ? 'scrolled' : ''} d-none d-lg-block`}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/Photos/Logo.png"
              alt="Logo"
              style={{ width: 'auto', height: 'auto', maxWidth: '100px' }}
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" className="nav-link-custom" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '20px' }}>
              About
            </Nav.Link>
            <Nav.Link href="/" className="nav-link-custom" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '20px' }}>
              Work
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1QDNclcjHPXfaxCqg-uQxOFidRnqGoT-z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-custom"
              style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '20px' }}
            >
              Resume
            </Nav.Link>
            <Nav.Link href="mailto:Marahknyfaty@outlook.com">
              <FaEnvelope style={{ color: '#E46698', fontSize: '24px' }} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/marah-kn/">
              <FaLinkedinIn style={{ color: '#E46698', fontSize: '24px' }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Hamburger icon for small and medium screens */}
      <Navbar bg="light" expand="lg" sticky="top" className="d-lg-none">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/Photos/Logo.png"
              alt="Logo"
              style={{ width: 'auto', height: 'auto', maxWidth: '70px' }}
            />
          </Navbar.Brand>
          <Button variant="link" onClick={handleOpenMenu} className="ms-auto">
            <FaBars style={{ fontSize: '24px', color: '#E46698' }} />
          </Button>
        </Container>
      </Navbar>

      {/* Fullscreen menu when hamburger menu is open */}
      {isMenuOpen && (
        <div className="fullscreen-menu">
          <div className="menu-header">
            <Navbar.Brand href="/">
              <img
                src="/Photos/Logo.png"
                alt="Logo"
                style={{ width: 'auto', height: 'auto', maxWidth: '70px' }}
              />
            </Navbar.Brand>
            <div className="menu-icons">
              <Nav.Link href="mailto:Marahknyfaty@outlook.com">
                <FaEnvelope style={{ color: '#E46698', fontSize: '24px' }} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/marah-kn/">
                <FaLinkedinIn style={{ color: '#E46698', fontSize: '24px' }} />
              </Nav.Link>
              <Button variant="link" onClick={handleCloseMenu}>
                <FaTimes style={{ fontSize: '24px', color: '#E46698' }} />
              </Button>
            </div>
          </div>

          <div className="menu-links text-center">
            <Nav.Link as={Link} to="/about" className="nav-link-custom" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '24px' }}>
              About
            </Nav.Link>
            <Nav.Link href="/" className="nav-link-custom" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '24px' }}>
              Work
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1QDNclcjHPXfaxCqg-uQxOFidRnqGoT-z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-custom"
              style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '24px' }}
            >
              Resume
            </Nav.Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;


