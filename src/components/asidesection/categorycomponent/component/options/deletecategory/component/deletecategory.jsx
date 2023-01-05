import React, { useContext } from 'react';
import styles from "./../styles/deletecategory.module.css";
import iconsglobal from '../../../../../../../assets/font-awesomeicons/icons';
import { CategoryContext } from '../../../../../../contextapis/categorydatacontext/categorydatacontext';




function DeleteCategory  () {

  const { DeleteCategoryComponent } = useContext( CategoryContext );

  return (

    <div className = {styles.categoryoptioncontainer} >
        <button onClick={ ()=> DeleteCategoryComponent() } className= {styles.categorydeletebutton} >Delete <i className = {styles.deleteicon} > { iconsglobal.deleteTrashIcon } </i> </button>
    </div>
    
  )
}

export default DeleteCategory;

