import React from 'react';
import "../css/EmailList.css";
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import EmailSection from './EmailSection';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ErrorIcon from '@material-ui/icons/Error';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>

                    <IconButton>
                        <RedoIcon/>
                    </IconButton> 

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>                 
                </div>

                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton> 

                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>

                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="emailList__section">
                    <EmailSection Icon ={InboxIcon} title="Primary" color="#c04b37" selected/>
                    <EmailSection Icon ={PeopleIcon} title="Social" color="#1A73E8" />
                    <EmailSection Icon ={LocalOfferIcon} title="Promotions" color="green" />
                    <EmailSection Icon ={ErrorIcon} title="Updates" color="#1A73E8" />
                    <EmailSection Icon ={QuestionAnswerIcon} title="Forms" color="green" />
            </div>

            <div className="emailList__list">
                <EmailRow 
                    title="Naresh Payani"
                    subject="Test Mail"
                    description="Fuck of"
                    time="11pm"
                />

                <EmailRow 
                    title="Alekhya"
                    subject="React Js"
                    description="Gmail Clone hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                    time="12/01/2021"
                />
            </div>
        </div>
    )
}

export default EmailList;
