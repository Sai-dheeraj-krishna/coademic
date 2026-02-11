import { motion } from 'framer-motion';
import { Briefcase, UserCheck, MessageSquare } from 'lucide-react';

const Placement = () => {
    return (
        <section id="placement" className="section" style={{ background: '#161616', overflow: 'hidden' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <motion.div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Dedicated <br />
                            <span className="gradient-text">Placement Assistance</span>
                        </h2>
                        <p style={{ color: 'var(--gray-text)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                            We don't just teach you skills; we prepare you for the industry. Our placement support focuses on making you job-ready through comprehensive preparation.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { icon: <Briefcase />, text: 'Job Readiness Support' },
                                { icon: <MessageSquare />, text: 'Mock Interviews & Feedback' },
                                { icon: <UserCheck />, text: 'Career Guidance & Mentorship' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                                >
                                    <div style={{
                                        color: 'var(--primary-red)',
                                        background: 'rgba(220, 20, 60, 0.1)',
                                        padding: '0.5rem',
                                        borderRadius: '8px'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Element / Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            opacity: { duration: 0.6 },
                            scale: { duration: 0.6 },
                            y: {
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }
                        }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.05) 0%, rgba(20, 20, 20, 0.5) 100%)',
                            borderRadius: '24px',
                            padding: '3rem',
                            border: '1px solid rgba(220, 20, 60, 0.2)',
                            minHeight: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '150px',
                                height: '150px',
                                background: 'var(--primary-red)',
                                borderRadius: '100%',
                                filter: 'blur(80px)',
                                opacity: 4
                            }} />
                            <div style={{ zIndex: 1, textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Your Career Starts Here</h3>
                                <p style={{ color: 'var(--gray-text)' }}>
                                    Bridging the gap between learning and earning.
                                </p>
                                <a
                                    href="https://wa.me/919700524789?text=Hello! I would like to get support regarding Coademic courses."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        marginTop: '2rem',
                                        background: 'white',
                                        color: 'var(--deep-red)',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '50px',
                                        fontWeight: 700,
                                        display: 'inline-block',
                                        textDecoration: 'none'
                                    }}>
                                    Get Support
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Placement;
