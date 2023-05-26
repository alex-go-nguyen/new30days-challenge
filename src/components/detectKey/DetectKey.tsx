import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DetectKey.module.scss';
import Card from '../card/Card';

const cx = classNames.bind(styles);

type KeyboardDetail = Pick<KeyboardEvent, 'key' | 'location' | 'which' | 'code'>;

export default function DetectKey() {
    const [keyDetail, setKeyDetail] = useState<KeyboardDetail>();

    const keyDownHandler = ({ key, location, which, code }: KeyboardEvent) => {
        setKeyDetail({
            key,
            location,
            which,
            code,
        });
    };

    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);
    return (
        <div>
            {!keyDetail ? (
                <div className={cx('empty')}>Press Any key</div>
            ) : (
                <>
                    <div className={cx('result')}>{keyDetail.which}</div>
                    <div className={cx('details')}>
                        <Card title="Key">{keyDetail.key.toLocaleUpperCase()}</Card>
                        <Card title="Location">{String(keyDetail.location)}</Card>
                        <Card title="Which">{String(keyDetail.which)}</Card>
                        <Card title="Code">{keyDetail.code}</Card>
                    </div>
                </>
            )}
        </div>
    );
}
