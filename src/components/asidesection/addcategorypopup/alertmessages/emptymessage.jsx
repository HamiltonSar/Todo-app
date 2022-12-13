import React from 'react';
import styles from "./generalstyles/messages.module.css";
import iconsglobal from '../../../../assets/font-awesomeicons/icons';







const EmptyMessage = () => {
  return (
    <div className= {styles.errorcolormessage}>
        <h2 className= {styles.messagestext} >You cannot create a empty category! <i className= {styles.iconmessage} > { iconsglobal.alertIcon } </i> </h2>
    </div>
  )
}

export default EmptyMessage
