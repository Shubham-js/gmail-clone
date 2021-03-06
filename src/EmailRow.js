import React from 'react';
import './EmailRow.css';
import{Checkbox, IconButton} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from "react-router-dom";
import {useDispatch} from  'react-redux';
import {selectMail} from './features/mailSlice';
function EmailRow({id, title, subject,descripton, time}){
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = ()=>{
        dispatch(selectMail({
            id,
            title,
            subject,
            descripton,
            time,
        }));
        history.push("/mail")
    };
    return(
        <div  onClick={openMail}className="emailRow">

        <div className="emailRow__options">
        <Checkbox/>
        <IconButton>
            <StarBorderIcon/>
        </IconButton>
        <IconButton>
            <LabelImportantOutlinedIcon/>
        </IconButton>

        </div>
        <div className="emailRow__title">
            <h3>{title}</h3>
        </div>
        <div className="emailRow__message">
            <h4>{subject}
            <span className="emailRow__description">-{descripton}</span>
            </h4>
        </div>
        <div className="emailRow__time">
            {time}
        </div>





            </div>
    )
}
export default EmailRow;