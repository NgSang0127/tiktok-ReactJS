import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
const Menu = ({children}) => {
    return (
        <nav className={cx('menu')}>
            {children}
        </nav>
    );
};
Menu.propTypes = {
    children: PropTypes.node.isRequired,

}

export default Menu;
