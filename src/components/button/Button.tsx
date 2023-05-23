import React, { PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends PropsWithChildren {
    size?: ButtonSize;
    color?: string;
    disabled?: boolean;
    onClick?: () => void;
    variant?: ButtonVariant;
}

export default function Button({
    size = 'md',
    variant = 'primary',
    color = 'success',
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
