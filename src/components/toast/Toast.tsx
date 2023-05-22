import React from 'react';
import classNames from 'classnames/bind';
import styles from './Toast.module.scss';
import { FaCheckCircle, FaExclamationCircle, FaExclamationTriangle } from 'react-icons/fa';

const cx = classNames.bind(styles);

export interface ToastProps {
    variant?: string;
    isOpen?: boolean;
    message?: string;
}

export default function Toast({ variant = 'success', isOpen, message = 'This is success message!' }: ToastProps) {
    return (
        <div className={cx('toast', variant, { isOpened: isOpen })}>
            <span className={cx('icon')}>
                {variant == 'success' && <FaCheckCircle />}
                {variant == 'warning' && <FaExclamationCircle />}
                {variant == 'error' && <FaExclamationTriangle />}
            </span>
            <span className={cx('message')}>{message}</span>
        </div>
    );
}
