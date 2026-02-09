import { motion } from 'framer-motion';

const Background = () => {
    // Generate random positions for particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 1,
        duration: Math.random() * 20 + 20,
    }));

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0, // Behind everything
            pointerEvents: 'none'
        }}>
            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(220, 20, 60, 0.03) 0%, rgba(10, 10, 10, 0) 70%)',
                zIndex: 1
            }} />

            {/* Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    style={{
                        position: 'absolute',
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        borderRadius: '50%',
                        background: 'rgba(220, 20, 60, 0.3)',
                        boxShadow: '0 0 10px rgba(220, 20, 60, 0.3)',
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "reverse"
                    }}
                />
            ))}
        </div>
    );
};

export default Background;
