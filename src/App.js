import React, {useEffect} from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import {useSelector,  useDispatch} from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice';
import {selectUser,login} from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch =useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user)
      {
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))
      }
    }) 
  },[])
  return (
    <Router>
     {!user ?(
       <Login/>
     ):(
      <div className="app">
      <Header/>
      <div className="app__body">
      <Sidebar/>

      <Switch> 
        <Route path="/Mail">
        <Mail/>
        </Route>
        <Route path="/">
          <EmailList/>
        </Route>
      </Switch>
      </div>
     
      {sendMessageIsOpen && <SendMail/>}
    </div>
     ) } 
    
    </Router>
  );
}

export default App;
