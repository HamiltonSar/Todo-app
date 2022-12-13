import React from 'react'
import styles from "./../styles/addcategory.module.css";
import iconsglobal from '../../../../assets/font-awesomeicons/icons';
import { useContext } from 'react';
import { PopUpData } from '../../../contextapis/popupcontext/popcontext';
import AddCategoryPopup from '../../addcategorypopup/component/addcategorypopup';









function AddCategory () {

  const { ShowPopUp } = useContext( PopUpData );

  return (
    <div className= {styles.addcategorycontainer} >
        <button onClick={ ()=> ShowPopUp( < AddCategoryPopup/> ) } className= {styles.buttonaddcategory} > Add new category <i>{ iconsglobal.plusIcon  }</i></button>
    </div>
  )
}

export default AddCategory;
