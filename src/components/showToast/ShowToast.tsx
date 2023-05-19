import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ShowToast.module.scss';
import Button from '../button/Button';
import Toast from '../toast/Toast';
import useBoolean from '../../hooks/useBoolean';

const cx = classNames.bind(styles);

export type toast = {
    type: string;
    message: string;
};
export interface ShowToastProps {}

export default function ShowToast(props: ShowToastProps) {
    const { value, setTrue, setFalse } = useBoolean(false);
    const [toast, setToast] = useState<toast>();

    const handleShowToast = (type: string, message: string) => {
        const data = {
            type,
            message,
        };
        setToast(data);
        setTrue();
        setTimeout(() => {
            setFalse();
        }, 3000);
    };

    return (
        <div className={cx('container')}>
            <Button
                variant="primary"
                color="success"
                label="Show success"
                onClick={() => handleShowToast('success', 'You have a success!')}
            />
            <Button
                variant="primary"
                color="warning"
                label="Show Warning"
                onClick={() => handleShowToast('warning', 'You have a warning!')}
            />
            <Button
                variant="primary"
                color="error"
                label="Show Error"
                onClick={() => handleShowToast('error', 'You have an error!')}
            />
            <Toast variant={toast?.type} message={toast?.message} isOpen={value} />
        </div>
    );
}
