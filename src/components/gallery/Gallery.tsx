import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';
const cx = classNames.bind(styles);
import { FaAngleRight, FaAngleLeft, FaTimes } from 'react-icons/fa';

enum Action {
    Next,
    Prev,
}

export type Item = {
    id: number;
    src: string;
};

export interface GalleryProps {
    data: Item[];
    index: number;
    isOpen?: boolean;
    onClose?: () => void;
    onChange: (index: number) => void;
}

export default function Gallery({ isOpen = false, data, index, onClose, onChange }: GalleryProps) {
    const handleControllingImage = (action: Action) => onChange(action === Action.Next ? index + 1 : index - 1);

    return (
        <div className={cx('gallery', { show: isOpen })}>
            <span
                className={cx('control', 'next', { hide: index === data.length - 1 })}
                onClick={() => handleControllingImage(Action.Next)}
            >
                <FaAngleRight />
            </span>
            <span
                className={cx('control', 'prev', { hide: index === 0 })}
                onClick={() => handleControllingImage(Action.Prev)}
            >
                <FaAngleLeft />
            </span>
            <div className={cx('inner')}>
                <img src={data[index]?.src} alt="Squirel" />
            </div>
            <span className={cx('close')} onClick={onClose}>
                <FaTimes />
            </span>
        </div>
    );
}
