import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router';
import db from '../firebase';

function SidebarOption({ Icon, title, id, addChannelOption }) {
    const history = useHistory(); //back해주는거  페이지 클릭시 아이콘 페이지이동
    const selectChannel = () => {
        if (id) {
            history.push('/room/${id');
        } else {
            history.push('title');
        }
    };
    const addChannel = () => {
        const channelName = prompt('Please enter the channel');
        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            });
        }
    };
    return (
        <div
            className="sidebarOption"
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="sidebarOption_channel">
                    <span className="sidebarOption_hash"># {title}</span>
                </h3>
            )}
        </div>
    );
}

export default SidebarOption;
