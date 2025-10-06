'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.css';

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about-me', label: 'About Me' },
        { href: '/my-hobby', label: 'My Hobby' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`navbar fixed-top shadow-sm ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
        >
            <div className="container div-header d-flex justify-content-between align-items-center">
                <Link href="/" className="fw-bold text-decoration-none fs-5">
                    <p className="my-name-navbar mb-0">Hikmal</p>
                </Link>

                {/* Navigation Items (Desktop) */}
                <div className="nav-items d-none d-lg-flex gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link position-relative pb-1 ${pathname === item.href ? 'active-page' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger Button on mobile */}
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
            </div>

            {/* Fullscreen Mobile Menu */}
            {menuOpen && (
                <div className="fullscreen-menu d-lg-none">
                    <div className="mobile-menu">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`nav-link-fullscreen ${pathname === item.href ? 'active-full' : ''}`}
                                onClick={() => setMenuOpen(false)} // Tutup saat klik link
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
