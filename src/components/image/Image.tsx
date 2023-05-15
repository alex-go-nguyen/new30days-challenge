import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

type ImageBorderRadius = 'none' | 'little' | 'partial' | 'full';

export interface ImageProps {
    ratio?: number;
    src: string;
    alt?: string;
    borderRadius?: ImageBorderRadius;
}

export default function Image({ ratio = 4 / 3, src, alt = 'Squirrel', borderRadius = 'none' }: ImageProps) {
    return (
        <div className={cx('container', borderRadius)}>
            <style jsx>
                {`
                    div {
                        aspect-ratio: ${ratio};
                    }
                `}
            </style>
            <img src={src} alt={alt} className={cx('image')} />
        </div>
    );
}
