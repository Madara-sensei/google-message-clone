import React from 'react'
import './Sidebar.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ContactItem from './components/ContactItem';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import { Button } from '@material-ui/core';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h3>Messages</h3>
                <MoreVertIcon size="large"/>
            </div>
            <div className="sidebar__chatBtn">
                <Button>
                        <ChatOutlinedIcon/>
                        <h5>Démarrer une discussion</h5>
                </Button>

            </div>
         
         
            <div className="sidebar__contactList">
                <ContactItem photo = "" lastMessage="test je suis la" name="Hugo"/>
                <ContactItem photo = "" lastMessage="Test test" name="Francis"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                <ContactItem photo = "" lastMessage="Je suis la " name="Martin"/>
                
            </div>
        </div>
    )
}

export default Sidebar
