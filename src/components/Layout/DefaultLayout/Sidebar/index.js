import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx=classNames.bind(styles);
const Sidebar = () => {
    return (
        <div>
            <aside className={cx('wrapper')}>
                <h2>Sidebar</h2>
            </aside>
        </div>
    );
};

export default Sidebar;