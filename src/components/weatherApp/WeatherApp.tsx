import React from 'react';
import classNames from 'classnames/bind';
import styles from './WeatherApp.module.scss';
import { FaCloud, FaRegEye, FaWind } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
const cx = classNames.bind(styles);

export type Data = {
    city: string;
    country: string;
    weather: string;
    deg: string;
    time: string;
    visibility: string;
    wind: string;
    cloud: string;
};

export type UserSubmitForm = {
    city: string;
};

export interface WeatherAppProps {
    data: Data;
    onSubmit?: (data: UserSubmitForm) => void;
}

export default function WeatherApp({ data, onSubmit }: WeatherAppProps) {
    var a: number = 12;
    const { register, handleSubmit, reset } = useForm<UserSubmitForm>();

    const onSubmitHandler = (data: UserSubmitForm) => {
        onSubmit?.(data);
        reset();
    };

    return (
        <form className={cx('container')} onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
            <style jsx>
                {`
                    form {
                        background-image: url('${parseInt(data.deg) > 15
                            ? 'https://raw.githubusercontent.com/namndwebdev/html-css-js-thuc-chien/main/Weather%20App/hot.png'
                            : 'https://raw.githubusercontent.com/namndwebdev/html-css-js-thuc-chien/main/Weather%20App/cold.png'}');
                    }
                `}
            </style>
            <input placeholder="Search..." className={cx('search')} {...register('city')} autoComplete="off" />
            <div className={cx('body')}>
                <p className={cx('place')}>
                    {data.city} , {data.country}
                </p>
                <p className={cx('time')}>{data.time}</p>
                <div className={cx('temperature')}>
                    <span className={cx('value')}>{data.deg}</span>
                    <span className={cx('type')}>C</span>
                </div>
                <p className={cx('short-desc')}>{data.weather}</p>
                <div className={cx('more-desc')}>
                    <div className={cx('visibility')}>
                        <div className={cx('icon')}>
                            <FaRegEye />
                        </div>
                        <span>{data.visibility} (m)</span>
                    </div>
                    <div className={cx('wind')}>
                        <div className={cx('icon')}>
                            <FaWind />
                        </div>
                        <span>{data.wind} (m/s)</span>
                    </div>
                    <div className={cx('cloud')}>
                        <div className={cx('icon')}>
                            <FaCloud />
                        </div>
                        <span>{data.cloud} (%)</span>
                    </div>
                </div>
            </div>
        </form>
    );
}
