import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Courses', href: '#courses' },
        { name: 'Services', href: '#services' },
        { name: 'Placement', href: '#placement' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Team', href: '#team' },
    ];

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 'var(--nav-height)',
            background: 'rgba(17, 17, 17, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div className="container" style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                    <span className="gradient-text">Coademic</span>
                </div>

                {/* Desktop Nav */}
                <nav style={{ display: 'none', gap: '2rem' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--light-text)',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                transition: 'color 0.3s'
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        style={{
                            background: 'var(--gradient-red)',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '50px',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                        }}
                    >
                        Contact Us
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="mobile-toggle"
                    style={{ background: 'transparent', color: 'white' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                        position: 'absolute',
                        top: 'var(--nav-height)',
                        left: 0,
                        right: 0,
                        background: 'var(--dark-bg)',
                        padding: '2rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center'
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ fontSize: '1.1rem', fontWeight: 500 }}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; align-items: center; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--primary-red) !important; }
      `}</style>
        </header>
    );
};

export default Header;
