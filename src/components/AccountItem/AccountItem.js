import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const AccountItem = ({data}) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt="data.full_name" />
            <div className={cx('info')}>
                <h4 className={cx('nickname')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('username')}>{data.fullName}</span>
            </div>
        </Link>
    );
};
AccountItem.propTypes = {
    data:PropTypes.object.isRequired,
}
export default AccountItem;
