import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Headless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/export';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import MenuItem2 from '~/components/Popper/Menu/Header_Menu';

const cx = classNames.bind(styles);
const defaultFn = () => {};

const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    const handleResetToFirstItem = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <Headless
            hideOnClick={hideOnClick}
            offset={[12, 10]}
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('setting-wrapper')}>
                        {history.length > 1 && <MenuItem2 title={current.title} onBack={handleBackMenu}></MenuItem2>}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstItem}
        >
            {children}
        </Headless>
    );
};
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
