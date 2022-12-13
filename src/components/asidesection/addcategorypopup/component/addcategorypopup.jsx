import React, { useRef , useContext  } from 'react';
import styles from "./../styles/addcategorypopup.module.css";
import iconsglobal from '../../../../assets/font-awesomeicons/icons';
import { PopUpData } from '../../../contextapis/popupcontext/popcontext';
import { CategoryContext } from '../../../contextapis/categorydatacontext/categorydatacontext';



function AddCategoryPopup ()  {
    
    
    const categoryRef = useRef();    
    const { AddCategoryComponent , categoryState } = useContext( CategoryContext );
    const { ClosePopUp  } = useContext( PopUpData );

  return (

    <div className= {styles.addcategorypopupcontainer} >

        <div className= {styles.closecontainer}>
            <button  onClick={ ()=> ClosePopUp() }  className= {styles.closebutton}><i className= {styles.closeicon}> { iconsglobal.cancelIcon }</i></button>
        </div>

        <div className= {styles.titlecontainer}>
            <h2 className= {styles.title}>Create a category to apart task from others</h2>
        </div>

        <div className= {styles.inputcontainer}>
            <input ref={ categoryRef } className= {styles.inputadd} type="text" placeholder= 'Add Category' />
        </div>

        <div className= {styles.buttonscontainer}>
            <button onClick = { ()=>  AddCategoryComponent(categoryRef.current.value)} className= {styles.buttonadd}>Add <i className= {styles.buttonaddicon}> { iconsglobal.plus }</i></button>
            <button onClick={ ()=> ClosePopUp() }  className= {styles.buttoncancel}>Cancel</button>
        </div>
        
        <div>
            {categoryState.message}
        </div>

    </div>
  )
}

export default AddCategoryPopup;

