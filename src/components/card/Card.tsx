import React, { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);

export interface CardProps extends PropsWithChildren {
    title: string;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className={cx('card')}>
            <p className={cx('title')}>{title}</p>
            <p className={cx('content')}>{children}</p>
        </div>
    );
}
