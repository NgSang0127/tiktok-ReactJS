import React from 'react';
import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = ({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={cx('wrapper', {
                [className]: className,
            })}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
};
Image.protoTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
