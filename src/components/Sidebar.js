import React from 'react';
import "../css/Sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import { Button, IconButton } from '@material-ui/core';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button className="sidebar__compose" startIcon={<AddIcon fontSize="large" />}>Compose</Button>
            <SidebarOptions Icon ={InboxIcon} title="Inbox" number={12} selected= {true}/>
            <SidebarOptions Icon ={StarIcon} title="Starred" number={2}/>
            <SidebarOptions Icon ={WatchLaterIcon} title="Snoozed" number={10}/>
            <SidebarOptions Icon ={SendIcon} title="Sent" number={120}/>
            <SidebarOptions Icon ={InsertDriveFileIcon} title="Draft" number={0}/>
            <SidebarOptions Icon ={LabelImportantIcon} title="Deleted Message" number={100}/>
            <SidebarOptions Icon ={ExpandMoreIcon} title="More" />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>

                    <IconButton>
                        <DuoIcon />
                    </IconButton>

                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
