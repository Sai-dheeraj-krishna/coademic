import { Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={{
            background: '#0a0a0a',
            padding: '4rem 0 2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }} className="gradient-text">Coademic</h3>
                        <p style={{ color: 'var(--gray-text)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Empowering the next generation of software developers with practical skills and career support.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'var(--light-text)', opacity: 0.7, transition: 'opacity 0.3s' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="#" style={{ color: 'var(--light-text)', opacity: 0.7, transition: 'opacity 0.3s' }}>
                                <Twitter size={20} />
                            </a>
                            <a href="#" style={{ color: 'var(--light-text)', opacity: 0.7, transition: 'opacity 0.3s' }}>
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#courses" style={{ color: 'var(--gray-text)' }}>Courses</a></li>
                            <li><a href="#services" style={{ color: 'var(--gray-text)' }}>Services</a></li>
                            <li><a href="#placement" style={{ color: 'var(--gray-text)' }}>Placement</a></li>
                            <li><a href="#why-us" style={{ color: 'var(--gray-text)' }}>Why Coademic</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li style={{ color: 'var(--gray-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={16} /> coademic.info@gmail.com
                            </li>
                            <li style={{ color: 'var(--gray-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Phone size={16} /> +91 9700524789
                            </li>
                            <li style={{ color: 'var(--gray-text)' }}>
                                Building future careers, one skill at a time.
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.4)',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Coademic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
