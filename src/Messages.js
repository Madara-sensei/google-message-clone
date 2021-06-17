import React from 'react'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './Messages.css'

import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import MessageItem from './components/MessageItem'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';

function Timestamp({timestamp}){
    return(
        <div className="messsages__timestamp">
            <p>{timestamp}</p>
        </div>
    )
}

function Messages() {

    return (
       <div className="messages">
           <div className="messages__header">
               <h3>John Doe</h3>
               <VideocamOutlinedIcon/>
               <NotificationsNoneIcon/>
               <MoreVertIcon/>
             
               
           </div>
           <div className="messages__messages">
               <Timestamp timestamp="ven 14 dec"/>
               <MessageItem me={true} message="Je suis la" timestamp="12:30"/>
               <Timestamp timestamp="ven 14 dec"/>
               <MessageItem me={false} message="Je suis la" timestamp="12:30"/>
               
           </div>
           <div className="messages__input">
               <div className="messages__inputContainer">
               <form >
                   <input type="text" className="messgaes__inputField" placeholder="Envoi de SMS" >
                   </input>
              </form>
               <div className="messages__inputIcons">
                    <EmojiEmotionsOutlinedIcon/>
                    <EmojiEventsOutlinedIcon/>
                    <GifOutlinedIcon/>
                    <ImageOutlinedIcon/>
              </div> 
              </div>
              <div className="messages__inputButton">
                  <button >
                      <SendOutlinedIcon size = "large"/>
                      
                  </button>
              </div>
           
              
           </div>
        
       </div>
    )
}

export default Messages
