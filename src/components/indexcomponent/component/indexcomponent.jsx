import React  from 'react'
import styles from "./../styles/indexcomponent.module.css";
import AsideComponent from '../../asidesection/aside/component/asidecomponent'
import { useContext } from 'react';
import { PopUpData } from '../../contextapis/popupcontext/popcontext';
import { CategoryContext } from '../../contextapis/categorydatacontext/categorydatacontext';



function IndexComponent () {

  const { state } = useContext(PopUpData);
  const { categoryState } = useContext(CategoryContext);

  


  return (
        <div>
            <div className= {styles.asidecore} >

                <AsideComponent />
            </div>
            <div>
              {state.popup}
              {categoryState.adddmodifiedcomponent}
            </div> 
        </div>
  )
}

export default IndexComponent;

