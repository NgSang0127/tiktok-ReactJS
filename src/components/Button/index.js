import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const Button = ({
    to,
    leftIcon,
    rightIcon,
    href,
    className,
    children,
    rounded = false,
    primary = false,
    small = false,
    text = false,
    disabled = false,
    large = false,
    outline = false,
    onClick,
    ...passProps
}) => {
    let Component = 'button';
    const props = {//props ở đây là để phân biệt với những classes scss ý là props css sẽ định nghĩa giá trị boolean
        //còn props của thẻ là khác giá trị boolean như onClick ,...
        onClick,
        ...passProps,
    };
    //remover event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });
    }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    const classes = cx('wrapper', {
        primary: primary,
        outline,
        small,
        text,
        large,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
};

export default Button;
