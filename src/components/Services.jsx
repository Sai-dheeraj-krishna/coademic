import { motion } from 'framer-motion';
import { FileText, Linkedin, Layout } from 'lucide-react';

const services = [
    {
        title: 'ATS-Friendly & Visual Resumes',
        icon: <FileText size={32} />,
        description: 'Stand out with resumes designed to pass Applicant Tracking Systems while looking professional and modern.'
    },
    {
        title: 'LinkedIn Profile Optimization',
        icon: <Linkedin size={32} />,
        description: 'Build a strong personal brand. We help you optimize your profile to attract recruiters and opportunities.'
    },
    {
        title: 'Business Landing Page Development',
        icon: <Layout size={32} />,
        description: 'Showcase your portfolio or business with a high-conversion, modern landing page built by professionals.'
    }
];

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Career & <span className="gradient-text">Professional Services</span>
                    </h2>
                    <p style={{ color: 'var(--gray-text)', fontSize: '1.1rem' }}>
                        Tools to improve your employability and personal branding.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{
                                x: 5,
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderColor: 'rgba(220, 20, 60, 0.3)'
                            }}
                            style={{
                                display: 'flex',
                                gap: '1.5rem',
                                padding: '2rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'border-color 0.3s',
                                cursor: 'default'
                            }}
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    minWidth: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'rgba(220, 20, 60, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary-red)'
                                }}
                            >
                                {service.icon}
                            </motion.div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--gray-text)', lineHeight: 1.6 }}>
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
