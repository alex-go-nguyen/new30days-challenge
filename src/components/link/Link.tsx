import React, { PropsWithChildren, useState } from 'react';

export interface LinkProps extends PropsWithChildren {
    page: string;
}
const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

export default function Link({ page, children }: LinkProps) {
    const [status, setStatus] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };

    return (
        <a className={status} href={page || '#'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </a>
    );
}
