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
                        <Card title="Key" content={keyDetail.key.toLocaleUpperCase()} />
                        <Card title="Location" content={String(keyDetail.location)} />
                        <Card title="Which" content={String(keyDetail.which)} />
                        <Card title="Code" content={keyDetail.code} />
                    </div>
                </>
            )}
        </div>
    );
}
