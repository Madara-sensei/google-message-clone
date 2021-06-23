import React from 'react'
import { Avatar } from '@material-ui/core'
import './ContactItem.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { setSelectedChat } from '../features/appSlice';
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';

function ContactItem({photo,lastMessage,name,id}) {
    const dispatch = useDispatch();


    return (
        <Link to="./messages" className="contactItem" onClick={()=>
                {
                    dispatch(setSelectedChat({
                        id : id,
                        name : name,
                        photo : photo
                    }))
                }
            }>
            
                
                <Avatar className="contactItem__avatar" src={photo}/>
                <div className="contactItem__info">
                <h3>{name}</h3>
                <p>{lastMessage}</p>

                </div>
                <div className="contactItem__param">
            
                    <p >13:50</p>
                    <MoreVertIcon size="small"/>

                </div>
            
     
        </Link>
            
    )
}

export default ContactItem
