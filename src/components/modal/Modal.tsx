import React, { useState, useEffect, ReactNode, PropsWithChildren } from 'react';
import styles from './Modal.module.scss';
import { IoMdClose } from 'react-icons/io';
import Button from '../button/Button';
import classNames from 'classnames';

type ModalType = 'success' | 'error';

const getButtoncolorByType = (type: ModalType) => {
    switch (type) {
        case 'success':
            return '#45c39d';
        case 'error':
            return '#f55462';
        default:
            return '#45c39d';
    }
};

export interface ModalProps {
    isOpen?: boolean;
    type?: ModalType;
    onClose?: () => void;
    title: string;
}

export default function Modal({ isOpen, onClose, title, type = 'success', children }: PropsWithChildren<ModalProps>) {
    return (
        <div>
            <div className={classNames({ [styles.modal]: true, [styles.isOpened]: isOpen })}>
                <div className={styles.container}>
                    <div className={classNames({ [styles.heading]: true, [styles[type]]: true })}>
                        <p className={styles.title}>{title}</p>
                        <span className={styles.closeIcon} onClick={onClose}>
                            <IoMdClose />
                        </span>
                    </div>
                    <div className={styles.content}>
                        {children}
                        <div className={styles.closeBtn} onClick={onClose}>
                            <Button variant="primary" label="Close" backgroundColor={getButtoncolorByType(type)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
