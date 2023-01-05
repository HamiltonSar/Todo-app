import React, { useState } from 'react';
import styles from "./../styles/categorycomponent.module.css";
import DeleteCategory from './options/deletecategory/component/deletecategory';
import ModifyCategory from './options/modifycategory/component/modifycategory';
import { useContext } from 'react';
import { CategoryContext } from '../../../contextapis/categorydatacontext/categorydatacontext';
import iconsglobal from "./../../../../assets/font-awesomeicons/icons.js";
import PropTypes from "prop-types";


const optionComponents = {
  deletecomponent: <DeleteCategory />,
  modifyCategory: <ModifyCategory />
}


function CategoryComponent( { adddatacategory }  ) {
  const [options, setOptions] = useState(false);
  const SwitchButton = () => setOptions(!options);


  return (
    <div className={styles.categorycomponentcontainer} >
      <div className={styles.titlecategorycontainer}>
        <h2 className={styles.titlecategory}> { iconsglobal.targetIcon } { adddatacategory } </h2>
      </div>
      <div className={styles.optionsbarcontainer} >

        <button onClick={() => SwitchButton()} className={styles.optionsbarbutton}> <i className={styles.optionsbaricon} > {iconsglobal.optionBarIcon} </i>

          {
            options ?
              <div className={styles.optioncategories} >
                {optionComponents.deletecomponent}
                {optionComponents.modifyCategory}
              </div> : null
          }

        </button>
      </div>

    </div>
  )
}
CategoryComponent.propTypes = {
  adddatacategory: PropTypes.string,
};
export default CategoryComponent;
