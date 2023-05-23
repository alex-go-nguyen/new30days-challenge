import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBox.module.scss';
import { FaSearch } from 'react-icons/fa';

const cx = classNames.bind(styles);

export default function SearchBox() {
    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);

    const handleOpenSearchBox = () => {
        setIsOpenSearchBox(!isOpenSearchBox);
    };

    return (
        <div className={cx('search-box', { show: isOpenSearchBox })}>
            <input type="text" className={cx('input')} />
            <button className={cx('btn')} onClick={handleOpenSearchBox}>
                <FaSearch />
            </button>
        </div>
    );
}
