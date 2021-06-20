import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import {auth,googleProvider} from './firebase'
import db from './firebase'
import { useDispatch } from 'react-redux'
import {login} from "./features/userSlice"

function Login() {
    const dispatch = useDispatch()
 
    const signIn= (e)=>{
            auth.signInWithPopup(googleProvider).then(
                (result)=>{
                   const user = result.user
                   db.collection("users").doc(user.uid).set({
                     
                       name : user.displayName,
                       email : user.email,
                       photo : user.photoURL

                   })
                   dispatch(login({
                    id :  user.uid,
                    name : user.displayName,
                    email : user.email,
                    photo : user.photoURL

                   }))
                  
                }
              
            )
    
                
        }
    return (
       <div className="login">
           
           <img className="login__img" src="https://www.allotech-dz.com/wp-content/uploads/2018/08/DM_AM_Main-1-696x440.jpg" alt="" />

            <Button size="large" onClick={signIn}>Connect with Google</Button>
       </div>
    )
}

export default Login;
