import React from 'react';
import iconsglobal from '../../../../assets/font-awesomeicons/icons';
import styles from "./generalstyles/messages.module.css";



const ValidMessage = () => {
  return (
    <div className= {styles.validcolormessage} >
        <h2 className= {styles.messagestext}  >Fine! , new category added <i className= {styles.iconmessage}> { iconsglobal.checkIcon } </i> </h2>
    </div>
  )
}


export default ValidMessage;
