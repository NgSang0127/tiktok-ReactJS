import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    faEllipsisVertical,
    faLanguage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faBookmark,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Headless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import '@icon/themify-icons/themify-icons.css';

import styles from './Header.module.scss';
import images from '~/assets/images/index.js';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { Inbox, Message} from 'src/components/Icons';
import Image from 'src/components/Image';

const cx = classNames.bind(styles);

const SETTING_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard and Shortcut',
    },
];
const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
        to: '/favorite',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...SETTING_ITEM,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
const Header = () => {
    const currentUser = true;
    const handleChange = (item) => {
        console.log(item);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok logo" />
                </div>
                <Search></Search>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx('custom-upload')}
                                to="/upload"
                                leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                            >
                                Upload
                            </Button>
                            <Tippy offset={[0, 12]} delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Message className={cx('icon-action')}></Message>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Inbox className={cx('icon-action')}></Inbox>
                                    <span className={cx('number-inbox')}>20</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to="/upload">
                                Upload
                            </Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}>
                                Log In
                            </Button>
                        </>
                    )}
                    <Menu  items={currentUser ? USER_MENU : SETTING_ITEM} onChange={handleChange}>
                        {currentUser ? (
                            <Image src={images.avatar} className={cx('user-avatar')} alt="Nguyen Cong Sang" />
                        ) : (
                            <button className={cx('setting-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
