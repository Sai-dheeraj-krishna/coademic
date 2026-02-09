import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Kalyani Panga',
        role: 'Chief Executive Officer & Founder'
    },
    {
        name: 'Sai Dheeraj Krishna Suda',
        role: 'Chief Executive Director'
    },
    {
        name: 'Manikanta Panga',
        role: 'Chief Operating Officer'
    },
    {
        name: 'Bhargavi Chiguripati',
        role: 'Technical Trainer'
    }
];

const Team = () => {
    return (
        <section id="team" className="section" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Our <span className="gradient-text">Leadership Team</span>
                    </h2>
                    <p style={{ color: 'var(--gray-text)', fontSize: '1.1rem' }}>
                        Meet the people driving Coademic's mission forward.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap'
                }}>
                    {teamMembers.map((member, index) => (
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
                                minWidth: '220px',
                                transition: 'border-color 0.3s'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                margin: '0 auto 1.5rem',
                                background: 'rgba(220, 20, 60, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                color: 'var(--primary-red)',
                                fontWeight: '600'
                            }}>
                                {member.name.charAt(0)}
                            </div>
                            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--light-text)' }}>
                                {member.name}
                            </h3>
                            <p style={{ color: 'var(--gray-text)', fontSize: '0.9rem' }}>
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
