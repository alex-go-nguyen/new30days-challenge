import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ImageList.module.scss';
import Gallery, { Item } from '../gallery/Gallery';
import Image from '../image/Image';
import useBoolean from '../../hooks/useBoolean';
const cx = classNames.bind(styles);

export interface ImageListProps {
    data: Item[];
}

export default function ImageList({ data }: ImageListProps) {
    const [imageShowId, setImageShowId] = useState(0);
    const { value, setTrue, setFalse } = useBoolean(false);

    const handleChooseImage = (index: number) => {
        setImageShowId(index);
        setTrue();
    };
    const handleChangeImage = (index: number) => {
        setImageShowId(index);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('image-list')}>
                {data.map((item, index) => (
                    <div className={cx('item')} key={item.id} onClick={() => handleChooseImage(index)}>
                        <Image src={item.src} alt="image" borderRadius="little" />
                    </div>
                ))}
            </div>
            <Gallery
                isOpen={value}
                onClose={setFalse}
                data={data}
                index={imageShowId}
                onChange={(index) => handleChangeImage(index)}
            />
        </div>
    );
}
