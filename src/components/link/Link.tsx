import React, { PropsWithChildren, useState } from 'react';

export interface LinkProps extends PropsWithChildren {
    page: string;
}

enum Status {
    Hovered = 'hovered',
    Normal = 'normal',
}

export default function Link({ page, children }: LinkProps) {
    const [status, setStatus] = useState(Status.Normal);

    const onMouseEnter = () => {
        setStatus(Status.Hovered);
    };

    const onMouseLeave = () => {
        setStatus(Status.Normal);
    };

    return (
        <a className={status} href={page || '#'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </a>
    );
}
