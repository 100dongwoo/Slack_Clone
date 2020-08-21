import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutline from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../Login/StateProvider';

function Header() {
    const [{ user }] = useStateValue();
    return (
        <div className="header">
            <div className="header_left">
                {/* avertar for loggin user*/}
                {/*timeicon*/}
                <Avatar
                    className="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </div>
            <div className="header_search">
                {/*    search icon*/}
                {/*input*/}
                <SearchIcon />
                <input placeholder={'Search Clever programer'} />
            </div>
            <div className="header_right">
                <HelpOutline />
            </div>
        </div>
    );
}

export default Header;
