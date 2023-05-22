import React, { PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends PropsWithChildren {
    size?: ButtonSize;
    /**
     * What color of the button's background?
     */
    backgroundColor?: string;
    /**
     * Button contents
     */
    color?: string;
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
    color = 'success',
    backgroundColor,
    hoverColor,
    disabled,
    onClick,
    children,
}: ButtonProps) {
    return (
        <button
            type="button"
            className={classNames({
                [styles[variant]]: true,
                [styles.disabled]: disabled,
                [styles.button]: true,
                [styles[size]]: true,
                [styles[color]]: true,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
