import Gallery, { Item } from '@/components/gallery/Gallery';
import Image from '@/components/image/Image';
import { useEffect, useState } from 'react';
import styles from './Day4.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const data: Item[] = [
    {
        id: 1,
        src: 'https://images.squarespace-cdn.com/content/v1/565d01afe4b0e37ee5012f4e/7eb02544-5f08-49b7-aa6c-51ed746184d5/alexander-62h8IRF5xDU-unsplash.jpg',
    },
    {
        id: 2,
        src: 'https://blue.kumparan.com/image/upload/v1634025439/01810a16a6bb874836ffc4f7210b04ec.jpg',
    },
    {
        id: 3,
        src: 'https://k84n7.csb.app/img2.jpeg',
    },
    {
        id: 4,
        src: 'https://cdn.theatlantic.com/media/img/photo/2021/11/winners-2021-natural-landscape-phot/a02_proy_539__5138/main_1500.jpg',
    },
    {
        id: 5,
        src: 'https://images.squarespace-cdn.com/content/v1/565d01afe4b0e37ee5012f4e/7eb02544-5f08-49b7-aa6c-51ed746184d5/alexander-62h8IRF5xDU-unsplash.jpg',
    },
    {
        id: 6,
        src: 'https://blue.kumparan.com/image/upload/v1634025439/01810a16a6bb874836ffc4f7210b04ec.jpg',
    },
    {
        id: 7,
        src: 'https://k84n7.csb.app/img2.jpeg',
    },
    {
        id: 8,
        src: 'https://cdn.theatlantic.com/media/img/photo/2021/11/winners-2021-natural-landscape-phot/a02_proy_539__5138/main_1500.jpg',
    },
];

export default function GalleryShow() {
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
    console.log('image show', imageShowId);

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
