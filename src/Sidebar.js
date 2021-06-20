import React from 'react'
import './Sidebar.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ContactItem from './components/ContactItem';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import { Button } from '@material-ui/core';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { useState ,useEffect} from 'react';
import db from './firebase';

function Sidebar() {
    const user = useSelector(selectUser)
    const [contactList, setcontactList] = useState([])

    
    useEffect(() => {
        if(user){
         db.collection("users")
         .doc(user.uid)
         .collection("contact")
        
         .onSnapshot((snapshot)=>{
         setcontactList(snapshot.docs.map((doc)=>({
             id:doc.id,
             contact : doc.data()
             
         })
     
    
        ))
      
      })
     
     }
    },[user])
  
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerText">
                    <h3>Messages</h3>
                    <MoreVertIcon size="large"/>
                </div>
                <div className="sidebar__headerButton">
                    <Button href="/new">
                            <ChatOutlinedIcon/>
                            <h5>Démarrer une discussion</h5>
                    </Button>

                </div>
        </div>
           
         
         
            <div className="sidebar__contactList">
                {  
                    contactList.map(({id,contact})=>{
                        return(
                            <ContactItem key={id} id={id} photo={null} lastMessage="Salut" name ={contact.mail.substring(0,6)}/>
                        )
                    })
                }
              
                
            </div>
        </div>
    )
}

export default Sidebar
