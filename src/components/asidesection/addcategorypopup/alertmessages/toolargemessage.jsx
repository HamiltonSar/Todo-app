import React from 'react';
import iconsglobal from '../../../../assets/font-awesomeicons/icons';
import styles from "./generalstyles/messages.module.css";



const ToolargeMessage = () => {
  return (
    <div className= {styles.errorcolormessage}>
        <h2 className= {styles.messagestext}> This category is too large! , be more specific <i className= {styles.iconmessage}> { iconsglobal.alertIcon } </i> </h2>
    </div>
  )
}

export default ToolargeMessage;

