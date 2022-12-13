import React, { useState } from 'react';
import styles from "./../styles/categorycomponent.module.css";
import DeleteCategory from './options/deletecategory/component/deletecategory';
import ModifyCategory from './options/modifycategory/component/modifycategory';
import { useContext } from 'react';
import { CategoryContext } from '../../../contextapis/categorydatacontext/categorydatacontext';
import iconsglobal from '../../../../assets/font-awesomeicons/icons';




const optionComponents = {
  deletecomponent : <DeleteCategory />,
  modifyCategory : <ModifyCategory /> 
}


function CategoryComponent  (    )  {
  
  const { categoryState } = useContext( CategoryContext );
  const [categoryOption , setCategoryOption] = useState(optionComponents);


  


  return (
    <div className= {styles.categorycomponentcontainer} >
      

      <div className= { styles.maindatacontainer } >

        <div className= {styles.titlecategorycontainer}>
            <h2 className= {styles.titlecategory}> {categoryState.adddatacategory} </h2>
        </div>

        <div className= {styles.categoryoptioncontainer}>
            <button onClick={()=> setCategoryOption(categoryOption) }  className= {styles.categoryoption}> <i> { iconsglobal.optionBarIcon } </i> </button>
        </div>

      </div>

        <div className= {styles.optioncategories} >
          { optionComponents.deletecomponent }
          {optionComponents.modifyCategory }
        </div>

    </div>
  )
}

export default CategoryComponent;
