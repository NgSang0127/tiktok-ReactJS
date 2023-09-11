import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Headless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/export';
import AccountPreview from "~/components/FollowingsAccount/AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

const AccountFollowing = ({ src }) => {
    return (
        <div>
            <Headless
                offset={[40,0]}
                delay={[500, 0]}
                placement="bottom"
                interactive
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('preview')}>
                                <AccountPreview></AccountPreview>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('list-account-item')}>
                    <img className={cx('avatar')} src={src} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>co be dang iu</strong>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}></FontAwesomeIcon>
                        </p>
                        <p className={cx('user-name')}>Han So Hee</p>
                    </div>
                </div>
            </Headless>
        </div>
    );
};
AccountFollowing.propTypes = {};
export default AccountFollowing;
