import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const AccountItem = ({image,nikname,name}) => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={image}
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('nickname')}>
                    <span>{nikname}</span>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>{name}</span>
            </div>
        </div>
    );
};

export default AccountItem;
