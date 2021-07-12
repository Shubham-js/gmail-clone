import React , {useState, useEffect} from 'react';
import {Checkbox, IconButton} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './EmailList.css';
import EmailRow from './EmailRow';
import {db} from './firebase';

function EmailList(){
    const [emails, setEmails] =useState([]);
    useEffect(()=> { 
        db.collection("emails")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot)=> 
            setEmails(
                snapshot.docs.map((doc) =>({
            id: doc.id,
            data: doc.data(),
        }))
        )
        ); 
    },[]);
    return (
        <div className="emailList">
        <div className="emailList__settings">
            <div className="emaiList__settingsLeft"> 
            <Checkbox/>
            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>
            <IconButton>
                <RefreshIcon/>
            </IconButton>
            <IconButton>
                 <MoreVertIcon/>
            </IconButton>


            </div>
            <div className="emailList__settingsRight">
            <IconButton>
                <KeyboardArrowLeftIcon/>

            </IconButton>
            <IconButton>
                <KeyboardArrowRightIcon/>
            </IconButton>
            <IconButton>
                <KeyboardIcon/>
            </IconButton>
            <IconButton>
                <SettingsIcon/>
            </IconButton>


            </div>

        </div>
        <div className="emailList__sections">
            <Section Icon={InboxIcon} title="Primary" color= "red" selected />
            <Section Icon={PeopleIcon} title="Social" color= "#1A73E8"  />
            <Section Icon={LocalOfferIcon} title="Promotions" color= "green" />

        </div>
        <div className="emailList__list">
        {emails.map(({id,data:{to,subject,message,timestamp
        }}) => (
            
            <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            descripton={message}
            time={new Date(timestamp?.seconds*1000).toLocaleString()}
            
            
            
         />
    
        ))}
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
          <EmailRow 
        
        title="Hello World2"
        subject="Hey this is a test "
        descripton="blah blah blah asfba aufbna agas ads vdv asfasvasdf afgasdgrd asfasf"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
          <EmailRow 
        
        title="Hello World2"
        subject="Hey this is a test "
        descripton="blah blah blah asfba aufbna agas ads vdv asfasvasdf afgasdgrd asfasf"
        time="10 PM"
        
        /><EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
          <EmailRow 
        
        title="Hello World2"
        subject="Hey this is a test "
        descripton="blah blah blah asfba aufbna agas ads vdv asfasvasdf afgasdgrd asfasf"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
          <EmailRow 
        
        title="Hello World2"
        subject="Hey this is a test "
        descripton="blah blah blah asfba aufbna agas ads vdv asfasvasdf afgasdgrd asfasf"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
          <EmailRow 
        
        title="Hello World2"
        subject="Hey this is a test "
        descripton="blah blah blah asfba aufbna agas ads vdv asfasvasdf afgasdgrd asfasf"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
          <EmailRow 
        
        title="Hello World2"
        subject="Hey this is a test "
        descripton="blah blah blah asfba aufbna agas ads vdv asfasvasdf afgasdgrd asfasf"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
          <EmailRow 
        
        title="Hello World2"
        subject="Hey this is a test "
        descripton="blah blah blah asfba aufbna agas ads vdv asfasvasdf afgasdgrd asfasf"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
          <EmailRow 
        
        title="Hello World2"
        subject="Hey this is a test "
        descripton="blah blah blah asfba aufbna agas ads vdv asfasvasdf afgasdgrd asfasf"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
        <EmailRow 
        
        title="Hello World"
        subject="Hey this is a test"
        descripton="blah blah blah"
        time="10 PM"
        
        />
          <EmailRow 
        
        title="Hello World2"
        subject="Hey this is a test "
        descripton="blah blah blah asfba aufbna agas ads vdv asfasvasdf afgasdgrd asfasf"
        time="10 PM"
        
        />

        
        </div>
        </div>
    );
}
export default EmailList