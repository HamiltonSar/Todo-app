import React from 'react';
import styles from "./../styles/taskpanelcontainer.module.css";




function TaskPanelContainer  ()  {
  
  return (
    <div className= {styles.taskpanelcontainer} >
        <div className = {styles.backgroundtask} >
            <h2 className = {styles.tasktitle}> Working </h2>
        </div>
        <div>
            <h2>Elemento</h2>
        </div>
    </div>
  )
}

export default TaskPanelContainer;