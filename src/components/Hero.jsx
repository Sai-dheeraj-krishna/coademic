import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 'var(--nav-height)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(220, 20, 60, 0.4) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, rgba(139, 0, 0, 0.35) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <div>
                        <span
                            style={{
                                color: 'var(--primary-red)',
                                fontWeight: 600,
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                background: 'rgba(220, 20, 60, 0.1)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '4px',
                                display: 'inline-block',
                                marginBottom: '1.5rem'
                            }}
                        >
                            Future-Focused Learning
                        </span>
                        <h1
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: '1.5rem'
                            }}
                        >
                            Master Software Skills. <br />
                            <span className="gradient-text">Build Your Career.</span>
                        </h1>
                        <p
                            style={{
                                fontSize: '1.1rem',
                                color: 'var(--gray-text)',
                                marginBottom: '2.5rem',
                                maxWidth: '600px',
                                lineHeight: 1.7
                            }}
                        >
                            Coademic empowers you with industry-relevant training, hands-on projects,
                            and dedicated placement support to make you job-ready.
                        </p>

                        <div
                            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                        >
                            <motion.a
                                href="#courses"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'var(--gradient-red)',
                                    color: 'white',
                                    padding: '1rem 2rem',
                                    borderRadius: '50px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    boxShadow: '0 4px 15px rgba(220, 20, 60, 0.3)'
                                }}
                            >
                                Start Learning <ArrowRight size={20} />
                            </motion.a>
                            <motion.a
                                href="#placement"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'transparent',
                                    color: 'white',
                                    padding: '1rem 2rem',
                                    borderRadius: '50px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                Get Career Support <ChevronRight size={20} />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
