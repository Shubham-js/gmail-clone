import React from 'react';
import './Sidebar.css';
import {Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOptions from './SidebarOptions';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch} from 'react-redux';
import {openSendMessage} from './features/mailSlice';
function Sidebar() {
    const dispatch =useDispatch(); //to dispatch an action into redux
    return(

        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose" onClick={()=>dispatch(openSendMessage())}
             >
            Compose
            </Button>
            <SidebarOptions Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOptions Icon={StarIcon} title="Starred" number={21} />
            <SidebarOptions Icon={WatchLaterIcon} title="Snoozed" number={32} />
            <SidebarOptions Icon={LabelImportantIcon} title="Important" number={32} />
            <SidebarOptions Icon={SendIcon} title="Sent" number={32} />
            <SidebarOptions Icon={InsertDriveFileIcon} title="Drafts" number={32} />
           
            <SidebarOptions Icon={ExpandMoreIcon} title="More" number={32} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                <IconButton>
                <PersonIcon/>
                </IconButton>
                <IconButton>
                 <PhoneIcon/>   

                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                                    </div>
            </div>
            

        </div>


    );
}
export default Sidebar;