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
function NewChat() {
    const user = useSelector(selectUser);
    const [input, setinput] = useState("")
    const addContact = (e)=>{
        e.preventDefault();
        const uid = user.uid
        //add the email
        console.log(uid)
        db.collection("users")
        .doc(uid)
        .collection("contact")
        .add({
            mail: input,
            added : firebase.firestore.FieldValue.serverTimestamp()
        })
        setinput("");

    }
    function Contact({photo,name,email}){
        return(
            <div className="newChat__contact">
                <Avatar className="newChat__avatar"/>
                <div className="newChat__contactInfo">
                <h4>{name}</h4>
                <p>{email} . email</p>
                </div>
               
            </div>
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
                   
            </div>
        </div>
    )
}

export default NewChat
