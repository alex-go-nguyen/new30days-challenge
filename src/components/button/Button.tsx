import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary';
type ButoonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
    size?: ButoonSize;
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
    size = 'medium',
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
