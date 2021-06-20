import React from 'react'
import { Avatar } from '@material-ui/core'
import './ContactItem.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { setSelectedChat } from '../features/appSlice';
import { useDispatch } from 'react-redux'; 


function ContactItem({photo,lastMessage,name,id}) {
    const dispatch = useDispatch();


    return (
        <div className="contactItem" onClick={()=>
            {
                dispatch(setSelectedChat({
                    id : id,
                    name : name
                }))
            }
        }>
    
            
            <Avatar className="contactItem__avatar"/>
            <div className="contactItem__info">
            <h3>{name}</h3>
            <p>{lastMessage}</p>

            </div>
            <div className="contactItem__param">
          
                <p className="contactItem_timestamp">13:50</p>
                <MoreVertIcon size="small"/>

            </div>
    
            
        </div>
    )
}

export default ContactItem
