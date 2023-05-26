import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './UploadImagePreview.module.scss';
import { FaCloudUploadAlt } from 'react-icons/fa';

const cx = classNames.bind(styles);

export default function UploadImagePreview() {
    const [file, setFile] = useState<File>();

    const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    return (
        <div className={cx('container')}>
            <label htmlFor="input-img" className={cx('preview')}>
                <div className={cx('wrapper')}>
                    {file && <img src={URL.createObjectURL(file)} alt={file.name} className={cx('image')} />}
                    <span className={cx('icon')}>
                        <FaCloudUploadAlt />
                    </span>
                    <div>Upload to preview image</div>
                </div>
            </label>
            <input type="file" id="input-img" hidden onChange={handleUploadImage} />
        </div>
    );
}
