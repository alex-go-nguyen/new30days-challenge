import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './RangeSlider.module.scss';

const cx = classNames.bind(styles);

export default function RangeSLider() {
    const parentElement = useRef<HTMLDivElement>(null);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const parentWidth = parentElement.current?.offsetWidth;

            const cursorX = e.clientX - (parentElement.current?.getBoundingClientRect().left || 0);

            const percent = Math.floor((cursorX / (parentWidth || 1)) * 100);

            setPercent(percent <= 100 ? percent : 100);
        };

        parentElement.current?.addEventListener('mousemove', handleMouseMove);

        return () => {
            parentElement.current?.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={cx('container')} ref={parentElement}>
            <div className={cx('bar')} style={{ width: `${percent}%` }}>
                {percent}%
            </div>
        </div>
    );
}
