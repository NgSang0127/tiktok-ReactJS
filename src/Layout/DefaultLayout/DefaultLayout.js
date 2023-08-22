import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/Layout/components/Header/Header';
import Sidebar from '~/Layout/DefaultLayout/Sidebar/Sidebar';

const cx=classNames.bind(styles);

const DefaultLayout = ({children}) => {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
};
DefaultLayout.propTypes ={
    children: PropTypes.node.isRequired,
}

export default DefaultLayout ;