import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);

export interface CardProps {
    title?: string;
    content?: string;
}

export default function Card({ title = 'title', content = 'content' }: CardProps) {
    return (
        <div className={cx('card')}>
            <p className={cx('title')}>{title}</p>
            <p className={cx('content')}>{content}</p>
        </div>
    );
}
