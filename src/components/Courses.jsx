import { motion } from 'framer-motion';
import { Code, Terminal, AppWindow, GitBranch, CheckCircle } from 'lucide-react';

const courses = [
    {
        title: 'JavaScript Mastery',
        icon: <Code size={40} className="course-icon" />,
        description: 'Master the language of the web. From basics to advanced concepts like closures, async/await, and DOM manipulation.',
        features: ['ES6+ Features', 'Asynchronous JS', 'DOM Manipulation']
    },
    {
        title: 'Python Programming',
        icon: <Terminal size={40} className="course-icon" />,
        description: 'Learn Python for software development, automation, and data analysis. Build robust applications with clean code.',
        features: ['Core Syntax', 'OOP Concepts', 'File Handling']
    },
    {
        title: 'Frontend Development',
        icon: null, // Custom icon or use lucide
        customIcon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="course-icon">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
        ),
        description: 'Build responsive, interactive websites using HTML5, CSS3, and modern frameworks. Create stunning user interfaces.',
        features: ['Responsive Design', 'CSS Flex/Grid', 'Modern UI/UX']
    },
    {
        title: 'GitHub & Version Control',
        icon: <GitBranch size={40} className="course-icon" />,
        description: 'Collaborate effectively with Git. Learn branching, merging, pull requests, and best practices for team workflows.',
        features: ['Git Basics', 'Branching Strategy', 'Collaboration']
    }
];

const Courses = () => {
    return (
        <section id="courses" className="section" style={{ background: '#161616' }}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Industry-Aligned <span className="gradient-text">Courses</span>
                    </h2>
                    <p style={{ color: 'var(--gray-text)', fontSize: '1.1rem' }}>
                        Practical, hands-on training designed to get you job-ready.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                y: -10,
                                backgroundColor: '#202020',
                                borderColor: 'rgba(220, 20, 60, 0.4)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}
                            style={{
                                background: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'border-color 0.3s',
                                cursor: 'default'
                            }}
                            className="course-card"
                        >
                            <motion.div
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                style={{ color: 'var(--primary-red)', marginBottom: '1.5rem', display: 'inline-block' }}
                            >
                                {course.icon || course.customIcon}
                            </motion.div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{course.title}</h3>
                            <p style={{ color: 'var(--gray-text)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                {course.description}
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {course.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d0d0d0' }}>
                                        <CheckCircle size={16} color="var(--primary-red)" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
