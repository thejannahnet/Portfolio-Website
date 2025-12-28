import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
                fontSize: '22px',
                fontWeight: '900',
                letterSpacing: '4px', // Increased letter spacing for wider look
                fontFamily: "'Inter', sans-serif",
                display: 'flex',
                alignItems: 'center',
                transform: 'scaleX(1.2)', // Increased scale for wider look
                transformOrigin: 'left center'
            }}>
                <span style={{
                    color: '#FFFFFF', // Pure white
                    textTransform: 'uppercase',
                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
                }}>
                    Ali Noman
                </span>
            </div>
        </div>
    );
};

export default Logo;
