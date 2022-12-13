import React , { useContext } from 'react';
import styles from "../styles/asidecomponent.module.css";
import SearchAside from '../../searchaside/component/searchaside';
import AddCategory from '../../addcategory/component/addcategory';
import { CategoryContext } from '../../../contextapis/categorydatacontext/categorydatacontext';



function AsideComponent ()  {

  const { categoryState } = useContext( CategoryContext );

  
  

  return (
        <div className= { styles.asidecomponentcontainer } >

              <div className= { styles.inputsearchcontainer } >
                <SearchAside />
              </div>

              <div className= { styles.textdefaultcontainer } >
                { categoryState.addcategorycomponent }
              </div>

              <div>
                  <AddCategory />
              </div>

        </div>
  )
}


export default AsideComponent;

