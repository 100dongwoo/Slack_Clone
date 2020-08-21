import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import DraftsIcon from '@material-ui/icons/Drafts';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
function Sidebar() {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) =>
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        );
        //Run this code Once when the sidebar component load (load 시 작동)
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2> clelo</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        백동우
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Thread" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="channer browser" />
            <SidebarOption Icon={PeopleAltIcon} title="people & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="showless" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannerOption="Add Channel" />

            {/*    connet to db and list all the channels*/}
            {/* */}
            {channels.map((channel) => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    );
}

export default Sidebar;
