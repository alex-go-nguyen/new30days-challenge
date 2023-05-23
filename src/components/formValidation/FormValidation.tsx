import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import classNames from 'classnames/bind';
import styles from './FormValidation.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

const cx = classNames.bind(styles);

type UserSubmitForm = {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
};

const schema = yup.object({
    name: yup.string().required('Vui lòng nhập tên'),
    email: yup.string().email('Vui lòng nhập đúng định dạng email').required('Vui lòng nhập email'),
    phone: yup.string().required('Vui lòng nhập số điện thoại'),
    password: yup
        .string()
        .min(6, 'Mật khẩu phải dài hơn 6 ký tự')
        .max(32, 'Mật khẩu quá dài')
        .required('Vui lòng nhập mật khẩu'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không khớp')
        .required('Vui lòng nhập lại mật khẩu'),
});

export interface FormVadiationProps {
    onSubmit?: (data: UserSubmitForm) => void;
}

export default function FormVadiation({ onSubmit }: FormVadiationProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserSubmitForm>({ resolver: yupResolver(schema) });

    const onSubmitHandler = (data: UserSubmitForm) => {
        onSubmit?.(data);
        alert('Đăng ký thành công');
        reset();
    };
    return (
        <form className={cx('form')} onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={cx('heading')}>Register</div>
            <div className={cx('field')}>
                <input placeholder="Username" {...register('name')} />
                {errors.name && <p className={cx('error')}>{errors.name?.message}</p>}
            </div>

            <div className={cx('field')}>
                <input placeholder="Email" {...register('email')} />
                {errors.email && <p className={cx('error')}>{errors.email?.message}</p>}
            </div>
            <div className={cx('field')}>
                <input placeholder="Phone" {...register('phone')} />
                {errors.phone && <p className={cx('error')}>{errors.phone?.message}</p>}
            </div>
            <div className={cx('field')}>
                <input placeholder="Password" {...register('password')} type="password" />
                {errors.password && <p className={cx('error')}>{errors.password?.message}</p>}
            </div>
            <div className={cx('field')}>
                <input placeholder="Confirm Password" {...register('confirmPassword')} type="password" />
                {errors.confirmPassword && <p className={cx('error')}>{errors.confirmPassword?.message}</p>}
            </div>
            <button className={cx('btn-submit')}>Sign up</button>
            <div className={cx('subscript')}>
                <p>
                    Had an account? <span className={cx('link')}>Sign in</span>
                </p>
            </div>
        </form>
    );
}
