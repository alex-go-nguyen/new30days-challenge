import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What color of the button's background?
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
    /**
     * Active or disable button
     */
    disabled?: boolean;
}

export default function Button({
    primary = false,
    label,
    backgroundColor,
    hoverColor,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            type="button"
            className={[
                primary ? styles.primary : styles.secondary,
                styles.button,
                disabled ? styles.disabled : '',
            ].join(' ')}
        >
            {label}
            <style jsx>{`
                button {
                    background-color: ${backgroundColor};
                }
                button:hover {
                    background-color: ${hoverColor};
                }
            `}</style>
        </button>
    );
}
