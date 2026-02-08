import { motion } from 'framer-motion';
import { Target, Monitor, Briefcase, Users, Zap } from 'lucide-react';

const features = [
    {
        icon: <Target size={32} />,
        title: 'Industry-Relevant Skills',
        text: 'Curriculum updated regularly to match current market demands.'
    },
    {
        icon: <Monitor size={32} />,
        title: 'Hands-On Learning',
        text: 'Learn by doing with real-world projects and practical exercises.'
    },
    {
        icon: <Briefcase size={32} />,
        title: 'Career-Focused Training',
        text: 'Designed specifically to help you start or advance your career.'
    },
    {
        icon: <Users size={32} />,
        title: 'Mentorship & Support',
        text: 'Get guidance from experienced professionals throughout your journey.'
    },
    {
        icon: <Zap size={32} />,
        title: 'Placement Assistance',
        text: 'Dedicated support to help you land your dream job.'
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Why Choose <span className="gradient-text">Coademic?</span>
                    </h2>
                    <p style={{ color: 'var(--gray-text)', fontSize: '1.1rem' }}>
                        We are committed to your growth and success.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: '#202020',
                                borderColor: 'rgba(220, 20, 60, 0.5)'
                            }}
                            style={{
                                textAlign: 'center',
                                padding: '2rem',
                                background: 'var(--card-bg)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'border-color 0.3s',
                                cursor: 'default'
                            }}
                        >
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    margin: '0 auto 1.5rem',
                                    background: 'rgba(220, 20, 60, 0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary-red)'
                                }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--gray-text)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                {feature.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
