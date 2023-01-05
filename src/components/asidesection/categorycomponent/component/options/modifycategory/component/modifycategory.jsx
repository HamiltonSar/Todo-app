import React from 'react';
import styles from "./../styles/modifycategory.module.css";
import iconsglobal from '../../../../../../../assets/font-awesomeicons/icons';
import { useContext } from 'react';
import { PopUpData } from '../../../../../../contextapis/popupcontext/popcontext';
import EditCategory from '../../../../../addcategorypopup/component/editcategorypop';



function ModifyCategory  ()  {
  const { ShowPopUp } = useContext( PopUpData );
  
  return (
    <div className = {styles.categoryoptioncontainer} >
        <button onClick={ () => ShowPopUp( <EditCategory /> )  } className = { styles.categorymodifybutton } >Modify <i className = {styles.modifyicon} > { iconsglobal.modifyIcon } </i></button>
    </div>
  )
}

export default ModifyCategory;