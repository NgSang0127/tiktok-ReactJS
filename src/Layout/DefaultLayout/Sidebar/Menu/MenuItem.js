import React from 'react';
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

const MenuItem = ({ title, to, icon: IconComponent, tagNew = false }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink
            className={cx('menu-item', {
                active: isActive,
            })}
            to={to}
        >
            <IconComponent isActive={isActive} />
            <span className={cx('menu-title')}>{title}</span>
            {tagNew && <span className={cx('menu-tag-new')}>New</span>}
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    tagNew: PropTypes.bool,
}

export default MenuItem;
