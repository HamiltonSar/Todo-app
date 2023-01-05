import React from 'react';
import styles from "./../styles/categoriescomponents.module.css";
import TaskPanelContainer from './taskpanelcontainer/component/taskpanelcontainer';


function CategoriesContainer ()  {
  return (
    <div className = { styles.categoriescomponets }>
        <TaskPanelContainer />
    </div>
  )
}

export default CategoriesContainer;
