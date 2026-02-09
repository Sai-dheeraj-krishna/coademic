import { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorDotRef = useRef(null);
    const cursorRingRef = useRef(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorRing = cursorRingRef.current;

        if (!cursorDot || !cursorRing) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const updateMousePosition = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Dot follows immediately
            cursorDot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
        };

        // Smooth trailing animation for the ring using requestAnimationFrame
        const animateRing = () => {
            // Lerp (linear interpolation) for smooth following
            ringX += (mouseX - ringX) * 1;
            ringY += (mouseY - ringY) * 1;
            cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
            requestAnimationFrame(animateRing);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                cursorDot.style.width = '18px';
                cursorDot.style.height = '18px';
                cursorDot.style.marginLeft = '-3px';
                cursorDot.style.marginTop = '-3px';
                cursorRing.style.width = '60px';
                cursorRing.style.height = '60px';
                cursorRing.style.opacity = '0.8';
            } else {
                cursorDot.style.width = '12px';
                cursorDot.style.height = '12px';
                cursorDot.style.marginLeft = '0';
                cursorDot.style.marginTop = '0';
                cursorRing.style.width = '40px';
                cursorRing.style.height = '40px';
                cursorRing.style.opacity = '0.4';
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        const animationId = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationId);
        };
    }, []);

    // Hide custom cursor on touch devices
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            <div
                ref={cursorDotRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-red)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                    transition: 'width 0.2s, height 0.2s, margin 0.2s',
                    willChange: 'transform'
                }}
            />
            <div
                ref={cursorRingRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid var(--primary-red)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    mixBlendMode: 'difference',
                    opacity: 0.4,
                    transition: 'width 0.2s, height 0.2s, opacity 0.2s',
                    willChange: 'transform'
                }}
            />
        </>
    );
};

export default Cursor;
