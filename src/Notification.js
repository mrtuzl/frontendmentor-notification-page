import React from 'react';
import './Notification.css';

function Notification(props) {
    console.log(props.dot);
  return (
    <div className={`not ${props.dot ? "blue" : ""}`} onClick={props.onClick}>
            <div className='not-img'> <img src={props.img} alt="profile"/> </div>
            <div className='not-info'> 
                    <div className='first-line'> 
                         <p className='info-name'> {props.name}
                         <span className='info-case'> {props.case}</span> 
                         <span className={`info-last ${props.club ? "club" : ""}`}> {props.last}</span>
                         <span className={`info-dot ${props.dot ? "dot" : ""}`}> </span>
                         </p>
                    </div>
                    <div className='time'> <span>{props.time} </span> </div>
                    <div className={`message ${props.ismessage ? "" : "nomessage"}`}> {props.message} </div>
            </div>
            <div className={`second-img ${props.isimg ? "" : "hide-img"}`}>  <img src={props.secondimg} alt="chess"/></div>

    </div>
  );
}

export default Notification;
