'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useMemo, useState } from 'react';

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const menuItems = useMemo(
    () => [
      { href: '/', label: 'Accueil' },
      { href: '/presentation', label: "L'Événement" },
      { href: '/inscription', label: 'Inscription' },
      { href: '/categories', label: 'Catégories' },
      { href: '/catalogue', label: 'Catalogue' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ],
    []
  );

  return (
    <Navbar expand="lg" className="navbar" expanded={expanded}>
      <Container>
        <Link href="/" className="navbar-brand brand-logo" onClick={() => setExpanded(false)}>
          <Image
            src="/logo-se.png"
            alt="SEIMEN"
            width={200}
            height={60}
            priority
            className="logo-image"
          />
      
        </Link>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="border-0"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-icon-list">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                {item.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
