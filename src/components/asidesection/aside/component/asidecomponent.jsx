import React , { useContext } from 'react';
import styles from "../styles/asidecomponent.module.css";
import SearchAside from '../../searchaside/component/searchaside';
import AddCategory from '../../addcategory/component/addcategory';
import { CategoryContext } from '../../../contextapis/categorydatacontext/categorydatacontext';
import CategoryComponent from '../../categorycomponent/component/categorycomponent';


function AsideComponent ()  {

  const { categoryState } = useContext( CategoryContext );

  
  

  return (
        <div className= { styles.asidecomponentcontainer } >

              <div className= { styles.inputsearchcontainer } >
                <SearchAside />
              </div>

              <div className={styles.textdefaultcontainer}>
                {
                  categoryState.map(( task )=> (
                    <CategoryComponent key={task.id} adddatacategory={task.text}  />
                  ))
                }
                 
              </div>

              <div>
                  <AddCategory />
              </div>

        </div>
  )
}


export default AsideComponent;

