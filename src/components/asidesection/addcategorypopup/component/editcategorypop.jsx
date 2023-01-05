import React , { useContext , useRef } from 'react'
import iconsglobal from '../../../../assets/font-awesomeicons/icons';
import styles from "./../styles/editcategorypop.module.css";
import { CategoryContext } from '../../../contextapis/categorydatacontext/categorydatacontext';
import { PopUpData } from '../../../contextapis/popupcontext/popcontext';



function EditCategory  () {

    const {  ClosePopUp } = useContext( PopUpData )
    const { AddModifiedCategoryComponent , setIndividualCategory } = useContext( CategoryContext );
    const editRef = useRef();


  return (
    <div className= {styles.editcategory}>
        <div className= {styles.buttoncancelcontainer} >
            <button onClick={ ()=> ClosePopUp() } className= {styles.buttoncancel} ><i>{ iconsglobal.cancelIcon }</i></button>
        </div>
        
        <div className= {styles.edittitlecontainer} >
            <h2 className= {styles.edittile} >Rewrite the category</h2>
        </div>

        <div className= {styles.editinputcontainer} >
            <input ref={ editRef } className= {styles.editinput} type="text" />
        </div>
        <div className= {styles.addeditbuttoncontainer} >
            <button onClick = {()=> setIndividualCategory(AddModifiedCategoryComponent( editRef.current.value ))}  className= {styles.addeditbutton} >Ok <i> {iconsglobal.checkIcon} </i> </button>
        </div>
    </div>
  )
}

export default EditCategory;
