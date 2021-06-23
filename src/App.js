import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Messages from './Messages';
import Login from './Login'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch,Redirect, Route} from 'react-router-dom';
import {selectUser} from './features/userSlice'
import { useEffect } from 'react';
import NewChat from './NewChat';
import {auth} from './firebase';
import { useDispatch } from 'react-redux';
import {login,logout} from './features/userSlice'
import db from './firebase';
import { selectContactList, setContactList } from './features/contactSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const contactList = useSelector(selectContactList)
  useEffect(() => {
    auth.onAuthStateChanged(

      (authUser)=>{
    
      if(authUser){
       
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          name: authUser.displayName


        })
      
     

        )
      }else{
        dispatch(logout());
        auth.logout();

      }}
    )
   }, [dispatch])
 
  return (
    <div className="app">
      <Router>
         
           <Switch>
            {
              user ?
              <>
              <Sidebar/>
              <Route path="/messages" render={()=> <Messages/>}/>
              <Route path="/new" render={()=><NewChat/>}/>
            
            
              </>

              :
              <>
               <Route path="/login" render={()=><Login/>}></Route>
         
              </>
            }

           
     
           </Switch>
      </Router>
  </div>
 
  );
}

export default App;


 
// useEffect(() => {
//   // get the contact list on user change
//   if(user!=null){
//     db.collection("users")
//     .doc(user.id)
//     .collection("contact")
//     .onSnapshot(snapshot =>{
//       setContactList(
//         snapshot.docs.map((doc)=>{
//           return(
//           setContactList({
//              id : doc.id,
//              contact : doc.data()
//           }
//           ))
//         })
//       )
//     })
//   }
// }, [user])