import * as React from 'react';
import styles from './ProfileCard.module.scss';
import { FaFacebookF, FaYoutube, FaTiktok, FaGithub } from 'react-icons/fa';
import Button from '../button/Button';

export interface ProfileCardProps {
    /**
     * Provide image url for
     */
    imageUrl?: string;
}

export default function ProfileCard({ imageUrl, ...props }: ProfileCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.avatar}>
                <img
                    src={
                        imageUrl ? imageUrl : 'https://harpersbazaar.com.au/wp-content/uploads/2022/11/jack-titanic.jpg'
                    }
                    alt="Avatar"
                />
            </div>
            <div className={styles.description}>
                <p className={styles.name}>Duy Thanh</p>
                <p className={styles.title}>Fullstack Developer</p>
            </div>
            <div className={styles.contactList}>
                <span className={styles.icon}>
                    <FaFacebookF />
                </span>
                <span className={styles.icon}>
                    <FaYoutube />
                </span>
                <span className={styles.icon}>
                    <FaTiktok />
                </span>
                <span className={styles.icon}>
                    <FaGithub />
                </span>
            </div>
            <div className={styles.action}>
                <Button variant="primary" label="Contact me" backgroundColor="#f2726a" />
            </div>
        </div>
    );
}
