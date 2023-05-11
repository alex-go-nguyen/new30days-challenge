import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * Choose color for background button?
     */
    backgroundColor?: string;
    /**
     * Button contents
     */
    label: string;
    /**
     * Choose hoverColor
     */
    hoverColor?: string;
}

export default function Button({ primary = false, label, backgroundColor, hoverColor, ...props }: ButtonProps) {
    return (
        <button type="button" className={[primary ? styles.primary : styles.secondary, styles.button].join(' ')}>
            {label}
        </button>
    );
}
