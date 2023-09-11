import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import images from "~/assets/images";
import Button from "~/components/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";


const cx=classNames.bind(styles);

const AccountPreview = () => {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img  className={cx('avatar')} src={images.image1} alt=""/>
                <Button  outline className={cx('button-follow')}>Follow</Button>
            </header>
            <section className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>co be dang iu</strong>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <p className={cx('user-name')}>Han So Hee</p>
                <p className={cx('numbers')}>
                    <strong className={cx('value')}>1.3M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>12.3M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
                <p className={cx('description')}>HiHi {"<3"} </p>
            </section>
        </div>
    );
};

export default AccountPreview;
