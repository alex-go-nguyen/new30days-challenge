import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './WeatherApp.module.scss';
import { FaCloud, FaRegEye, FaWind } from 'react-icons/fa';
import axios from 'axios';
import { useForm } from 'react-hook-form';
const cx = classNames.bind(styles);

type data = {
    city: string;
    country: string;
    weather: string;
    deg: string;
    time: string;
    visibility: string;
    wind: string;
    cloud: string;
};

type UserSubmitForm = {
    city: string;
};

export interface WeatherAppProps {
    data: data;
}

export default function WeatherApp({ data }: WeatherAppProps) {
    const { register, handleSubmit, reset } = useForm<UserSubmitForm>();
    const [dataWeather, setDataWeather] = useState(data);
    const CallAPI = async (place: string) => {
        try {
            const { data } = await axios.get('https://v1.nocodeapi.com/danish/ow/kByYHeRdQCmpeBOG/byCityName', {
                params: {
                    q: place,
                },
            });
            const currentDate = new Date();
            console.log(data);
            setDataWeather({
                city: data.name,
                country: data.sys.country,
                weather: data.weather[0].main,
                deg: (data.main.temp - 273.15).toFixed(0).toString(),
                time: currentDate.toLocaleDateString() + ', ' + currentDate.toLocaleTimeString(),
                visibility: data.visibility,
                wind: data.wind.speed,
                cloud: data.clouds.all,
            });
        } catch (e) {}
    };
    useEffect(() => {
        CallAPI('london');
    }, []);

    const onSubmitHandler = (data: UserSubmitForm) => {
        CallAPI(data.city);
        reset();
    };
    return (
        <form className={cx('container')} onSubmit={handleSubmit(onSubmitHandler)}>
            <style jsx>
                {`
                    form {
                        background-image: url('${parseInt(dataWeather?.deg) > 15
                            ? 'https://raw.githubusercontent.com/namndwebdev/html-css-js-thuc-chien/main/Weather%20App/hot.png'
                            : 'https://raw.githubusercontent.com/namndwebdev/html-css-js-thuc-chien/main/Weather%20App/cold.png'}');
                    }
                `}
            </style>
            <input placeholder="Search..." className={cx('search')} {...register('city')} />
            <div className={cx('body')}>
                <p className={cx('place')}>
                    {dataWeather?.city} , {dataWeather?.country}
                </p>
                <p className={cx('time')}>{dataWeather?.time}</p>
                <div className={cx('temperature')}>
                    <span className={cx('value')}>{dataWeather?.deg}</span>
                    <span className={cx('type')}>C</span>
                </div>
                <p className={cx('short-desc')}>{dataWeather?.weather}</p>
                <div className={cx('more-desc')}>
                    <div className={cx('visibility')}>
                        <div className={cx('icon')}>
                            <FaRegEye />
                        </div>
                        <span>{dataWeather?.visibility} (m)</span>
                    </div>
                    <div className={cx('wind')}>
                        <div className={cx('icon')}>
                            <FaWind />
                        </div>
                        <span>{dataWeather?.wind} (m/s)</span>
                    </div>
                    <div className={cx('cloud')}>
                        <div className={cx('icon')}>
                            <FaCloud />
                        </div>
                        <span>{dataWeather?.cloud} (%)</span>
                    </div>
                </div>
            </div>
        </form>
    );
}
