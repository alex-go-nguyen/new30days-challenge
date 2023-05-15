import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    size?: ButtonSize;
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
    /**
     * Set up onclick
     */
    onClick?: () => void;

    variant?: ButtonVariant;
}

export default function Button({
    size = 'md',
    variant = 'primary',
    label,
    backgroundColor,
    hoverColor,
    disabled,
    onClick,
}: ButtonProps) {
    return (
        <button
            type="button"
            className={classNames({
                [styles[variant]]: true,
                [styles.disabled]: disabled,
                [styles.button]: true,
                [styles[size]]: true,
            })}
            onClick={onClick}
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
