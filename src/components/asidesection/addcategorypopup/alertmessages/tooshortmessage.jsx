import React from 'react';
import iconsglobal from '../../../../assets/font-awesomeicons/icons';
import styles from "./generalstyles/messages.module.css";


const TooShortMessage = () => {
  return (
    <div className= {styles.errorcolormessage} >
      <h2 className= {styles.messagestext} >Too short , type a specific category <i className= {styles.iconmessage}> {iconsglobal.alertIcon} </i> </h2>
    </div>
  )
}

export default TooShortMessage
