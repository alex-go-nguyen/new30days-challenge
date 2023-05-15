import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ImageList.module.scss';
import Gallery, { Item } from '../gallery/Gallery';
import Image from '../image/Image';
const cx = classNames.bind(styles);

export interface ImageListProps {
    data: Item[];
}

export default function ImageList({ data }: ImageListProps) {
    const [open, setOpen] = useState(false);
    const [imageShowId, setImageShowId] = useState(0);

    const handleClose = () => {
        setOpen(false);
    };
    const handleChooseImage = (index: number) => {
        setImageShowId(index);
        setOpen(true);
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
                isOpen={open}
                onClose={handleClose}
                data={data}
                index={imageShowId}
                onChange={(index) => handleChangeImage(index)}
            />
        </div>
    );
}
