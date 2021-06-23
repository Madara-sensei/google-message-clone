import React from 'react'
import './Sidebar.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ContactItem from './components/ContactItem';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import { Button, MenuItem } from '@material-ui/core';
import { logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { useState ,useEffect} from 'react';
import db, { auth } from './firebase';
import { useDispatch } from 'react-redux';
import Menu from '@material-ui/core/Menu';
function Sidebar() {
    const user = useSelector(selectUser)
    const [contactList, setContactList] = useState([])
    const [options, setoptions] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOptions = (event) => {
        console.log("test")
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
        useEffect(() => {
            if(user){
             db.collection("users")
             .doc(user.uid)
             .collection("contact")
            .onSnapshot((snapshot)=>{
             setContactList(snapshot.docs.map((doc)=>({
                 id:doc.id,
                 contact : doc.data()
                 
             })
            ))
            })
          
      
 
         
         }
        },[user])
    const signOut = (e)=>{
        auth.signOut();
     }
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerText">
                    <h3 >Messages</h3>
                    <button onClick={handleOptions}>
                        <MoreVertIcon size="large" />
                    </button>
                    <Menu
                        className="sidebar__options"
                        
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >   <MenuItem>Désactiver le thème Sombre</MenuItem>   
                        <MenuItem>Archivées</MenuItem>   
                        <MenuItem>Spam et converstation bloquées</MenuItem>   
                        <MenuItem>Paramètres</MenuItem>   
                        <MenuItem>Envoyer des commentaires</MenuItem>   
                        <MenuItem>Aide</MenuItem>   
                        <MenuItem>Dissocier</MenuItem>   
                        <MenuItem onClick={signOut}>Se Déconnecter</MenuItem>
                    </Menu>
      
                  
                   
                </div>
              
           
                <div className="sidebar__headerButton">
                    <Button href="/new">
                            <ChatOutlinedIcon/>
                            <h5 className="sidebar__headerButtonText">Démarrer une discussion</h5>
                    </Button>

                </div>
        </div>
    
         
         
            <div className="sidebar__contactList">

                   { contactList.map(({id,contact})=>{
                        return(
                            <ContactItem key={id} id={id} name={contact.name} photo={contact.photo} lastMessage="test"/>
                        )
                    })

                    }
            </div>
        </div>
    )
}

export default Sidebar
