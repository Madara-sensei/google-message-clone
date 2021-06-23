import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './NewChat.css'
import { Avatar } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { useState } from 'react';
import {selectUser} from './features/userSlice'
import { useSelector } from 'react-redux';
import db from './firebase';
import firebase from 'firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedChat } from './features/appSlice';
import { Link } from 'react-router-dom';
function NewChat() {
    const user = useSelector(selectUser);
    const [input, setinput] = useState("")
    const [contactList, setContactList] = useState([])
    const dispatch = useDispatch()
    const addContact = async(e)=>{
        if(user.email !== input){
        e.preventDefault();
        await db.collection("users").where('email','==',input).limit(1).get()
         .then(querySnapshot => {
            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0]
                const contact = doc.data()
                db.collection("users")
                .doc(user.uid)
                .collection("contact")
                .doc(doc.id).set({
                    mail : contact.email,
                    name : contact.name,
                    photo : contact.photo
                })
            
                
              
                setinput("");
            }
            else{
                alert("User doesn't exist")
            }
         })
        }else{
            alert("This is your mail !")
        }  
        }      
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
     
       

    
    function Contact({id,photo,name,email}){
    
        return(
            <Link to='/messages' className="newChat__contact" onClick={()=>{
                dispatch(setSelectedChat({
                    id : id,
                    name : name,
                    photo : photo
                }))
            }}>
                <Avatar className="newChat__avatar" src={photo}/>
                <div className="newChat__contactInfo">
                <h4>{name}</h4>
                <p>{email} . email</p>
                </div>
               
           
            </Link>

        )
    }
    return (
        <div className="newChat">

            <div className="newChat__header">
                <div className="newChat__headerText">
                    <ArrowBackIcon/>
                    <h3>Nouvelle conversation</h3>

                </div>
               
                <div className="newChat__headerSearch">
                  <p>À :</p>
                  <form >
                  <input value= {input} onChange={(e)=>setinput(e.target.value)} type="text"  placeholder="Saisir  un email"/>
                  <button onClick={addContact} type="submit"></button>
                  </form>
                </div>
            </div>
          
            <div className="newChat__contactList">
                  
                        <button className="newChat__startChat">
                            <PersonAddOutlinedIcon/>
                            <h3>Démarrer une conversation de groupe</h3>
                        </button>
               
                    <h4>Contact principaux</h4>
                    {  
                    contactList.map(({id,contact})=>{
                      
                        return(
                            <Contact key={id} id={id} photo={contact.photo}  name ={contact.name} email={contact.mail} />
                        )
                    })
                }
                   
            </div>
        </div>
    )
}

export default NewChat
