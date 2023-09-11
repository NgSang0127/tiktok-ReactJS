import React from 'react';
import PropTypes from "prop-types";
import Headless from '@tippyjs/react/headless';
import classNames from "classnames/bind";
import styles from "./FollowingAccounts.module.scss";
import AccountFollowing from "~/components/FollowingsAccount/AccountFollowing";
import images from "~/assets/images";



const cx=classNames.bind(styles);
const FollowingAccounts = ({label}) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountFollowing src={images.image1}></AccountFollowing>
            <AccountFollowing src={images.image2}></AccountFollowing>
            <AccountFollowing src={images.image3}></AccountFollowing>
            <AccountFollowing src={images.image4}></AccountFollowing>
            <AccountFollowing src={images.avatar}></AccountFollowing>
            <button className={cx('wrapper-see-more')}>
                <p className={cx('see-more')}>See more</p>
            </button>
        </div>
    );
};
FollowingAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}
export default FollowingAccounts;
