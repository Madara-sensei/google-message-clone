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
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectChat } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
function Timestamp({timestamp}){
    return(
        <div className="messsages__timestamp">
            <p>{timestamp}</p>
        </div>
    )
}

function Messages() {
    const [sendButton, setsendButton] = useState(true)
    const [input, setinput] = useState("")
    const selectedChat = useSelector(selectChat)
    console.log(selectedChat)
    const user = useSelector(selectUser)
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        if(input){
            setsendButton(false);
        }
     
    }, [sendButton,input])

    useEffect(() => {
        
        if(selectedChat){
            db.collection("users")
            .doc(user.uid)
            .collection("contact")
            .doc(selectedChat.id)
            .collection("messages")
            .onSnapshot((snapshot)=>{
            setMessages(snapshot.docs.map((doc)=>({
                id:doc.id,
                message : doc.data()
                
            })
        
       
           ))
         })
         
        }
    }, [selectedChat,user])

    const sendMessage =(e)=>{
        e.preventDefault();
        db.collection("users")
        .doc(user.uid)
        .collection("contact")
        .doc(selectedChat.id)
        .collection("messages").add({
            me: true,
            message : input
        })
        setinput("")
    }
    return (
       <div className="messages">
           <div className="messages__header">
               <h3>{
                   selectedChat &&
               selectedChat.name}</h3>
               <VideocamOutlinedIcon/>
               <NotificationsNoneIcon/>
               <MoreVertIcon/>
             
               
           </div>
           <div className="messages__messages">
              {
                  messages &&
                  messages.map(({id,message})=>{
                      return (
                          <div key={id}>
                          <Timestamp timestamp={message.timestamp}/>
                          <MessageItem me={message.me} message={message.message} />
                          </div>
                      )
                  })
              }
                     
               
           </div>
           <div className="messages__input">
             <form >
               <div className="messages__inputContainer">
            
                   <input type="text" value={input} onChange={(e)=> setinput(e.target.value)} placeholder="Envoi de SMS" >
                   </input>
              
                    <div className="messages__inputIcons">
                            <EmojiEmotionsOutlinedIcon/>
                            <EmojiEventsOutlinedIcon/>
                            <GifOutlinedIcon/>
                            <ImageOutlinedIcon/>
                    </div> 
              </div>
              <div className="messages__sendButton">
                  <button disabled={sendButton} onClick={sendMessage}>
                      <SendOutlinedIcon size = "large"/>
                      
                  </button>
              </div>
              </form>
              
           </div>
        
       </div>
    )
}

export default Messages
