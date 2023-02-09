import React from 'react';
import './App.css';
import Notification from './Notification';
import mark from './avatar-mark-webber.webp';
import angela from './avatar-angela-gray.webp';
import jacob from './avatar-jacob-thompson.webp';
import rizky from './avatar-rizky-hasanuddin.webp';
import kimberly from './avatar-kimberly-smith.webp';
import nathan from './avatar-nathan-peterson.webp';
import anna from './avatar-anna-kim.webp';
import chess from './image-chess.webp';
import { useState } from 'react';




function App() {
 
  const [count, setCount] = useState(3);

  const [isRead1, setIsRead] = useState(true);
  const [isRead2, setIsRead2] = useState(true);
  const [isRead3, setIsRead3] = useState(true);
  const [isMessage, setIsMessage] = useState(true);
  const [isSecondimg, setIsSecondimg] = useState(true);

  const onClickReadAll = () => {
  
            setIsRead(false)
            setIsRead2(false)
            setIsRead3(false)
            setCount(0)
    
}
const isread1 = () => {
     if(isRead1) {
             setIsRead(false)
             setCount(count - 1)
     }
 }

 const isread2 = () => {
     if(isRead2) {
             setIsRead2(false)
             setCount(count - 1)
     }
 }

 const isread3 = () => {
     if(isRead3) {
             setIsRead3(false)
             setCount(count - 1)
     }
 }


  return (
    <div className="container">
        <div className='not-card'> 
          <div className='info-top'> 
            <div> 
            <h1> Notifications </h1>
           <span> {count} </span>
            </div>  
            
              <p onClick={onClickReadAll}> Mark all as read</p>
          </div>
          <div className='notifications'> 

          <Notification 
     img={mark}
     name="Mark Webber"
     case="reacted to your recent post"
     last="My first tournament today!"
     club=""
     dot={isRead1}
     time="1m ago"
     ismessage={!isMessage}
     isimg={!isSecondimg}
     onClick={isread1}
     />

<Notification 
     img={angela}
     name="Angela Gray"
     case="followed you"
     last=""
     club=""
     dot={isRead2}
     time="5m ago"
     ismessage={!isMessage}
     isimg={!isSecondimg}
     onClick={isread2}
     />

<Notification 
     img={jacob}
     name="Jacob Thompson"
     case="has joined your group"
     last="Chess Club"
     club="true"
     dot={isRead3}
     time="1 day ago"
     ismessage={!isMessage}
     isimg={!isSecondimg}
     onClick={isread3}
     />

<Notification 
     img={rizky}
     name="Rizky Hasanuddin"
     case="sent you a private message"
     last=""
     club="false"
     dot=""
     time=" 5 days ago"
     message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
     I'm already having lots of fun and improving my game."
     ismessage={isMessage}
     isimg={!isSecondimg}
     />


<Notification 
     img={kimberly}
     name="Kimberly Smith"
     case="commented on your picture"
     last=""
     club="false"
     dot=""
     time="1 week ago"
     ismessage={!isMessage}
     isimg={isSecondimg}
     secondimg={chess}
     />


<Notification 
     img={nathan}
     name="Nathan Peterson"
     case="reacted to your recent post"
     last="5 end-game strategies to increase your win rate"
     club=""
     dot=""
     time="2 weeks ago"
     ismessage={!isMessage}
     isimg={!isSecondimg}
     />


<Notification 
     img={anna}
     name="Anna Kim"
     case="left the group"
     last="Chess Club"
     club=""
     dot=""
     time=" 2 weeks ago"
     ismessage={!isMessage}
     isimg={!isSecondimg}
     />



      
          </div>
        </div>
    </div>
  );
}

export default App;
