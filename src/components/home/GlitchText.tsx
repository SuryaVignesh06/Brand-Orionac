import './GlitchText.css';
import React from 'react';

interface GlitchTextProps {
    children: React.ReactNode;
    speed?: number;
    enableShadows?: boolean;
    enableOnHover?: boolean;
    className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({
    children,
    speed = 1,
    enableShadows = true,
    enableOnHover = true,
    className = ''
}) => {
    const inlineStyles = {
        '--after-duration': `${speed * 3}s`,
        '--before-duration': `${speed * 2}s`,
        '--after-shadow': enableShadows ? '-5px 0 #ff0000' : 'none',
        '--before-shadow': enableShadows ? '5px 0 #00ffff' : 'none'
    } as React.CSSProperties;

    const hoverClass = enableOnHover ? 'enable-on-hover' : '';

    return (
        <div className={`glitch ${hoverClass} ${className}`} style={inlineStyles} data-text={typeof children === 'string' ? children : 'ORIONAC'}>
            {children}
        </div>
    );
};

export default GlitchText;
