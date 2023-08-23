import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from "~/config/export";
import Menu, { MenuItem } from "~/Layout/DefaultLayout/Sidebar/Menu";
import { HomeIcon, FollowIcon, ExploreIcon, LiveIcon } from "~/components/Icons/Icons";
import FollowingAccounts from "~/components/FollowingsAccount/FollowingAccounts";

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem title="For You" to={config.routes.home} icon={HomeIcon}></MenuItem>
                    <MenuItem title="Following" to={config.routes.following} icon={FollowIcon} ></MenuItem>
                    <MenuItem title="Explore" to={config.routes.explore} icon={ExploreIcon} tagNew ></MenuItem>
                    <MenuItem title="LIVE" to={config.routes.live} icon={LiveIcon} ></MenuItem>
                </Menu>
                <FollowingAccounts label="Following Accounts"></FollowingAccounts>
            </aside>
        </div>
    );
};

export default Sidebar;
