import React  from 'react';
import AsideComponent from '../../asidesection/aside/component/asidecomponent'
import { useContext } from 'react';
import { PopUpData } from '../../contextapis/popupcontext/popcontext';
import { CategoryContext } from '../../contextapis/categorydatacontext/categorydatacontext';
import styles from "./../styles/indexcomponent.module.css";
import Header from '../../header/component/header';
import CategoriesContainer from '../../categories/component/categoriescontainer';



function IndexComponent () {

  const { state } = useContext( PopUpData );
  const { categoryState } = useContext( CategoryContext );

  


  return (
        <div className = {styles.indexcore} >

            <div className= {styles.asidecore} >
                <AsideComponent />
                <div>
                  {state.popup}
                  {categoryState.adddmodifiedcomponent}
                </div> 
            </div>


            <div className = {styles.componentscore} >
              <CategoriesContainer />
            </div>
            

            <div className = {styles.headercore} >
              <Header />
            </div>

        </div>
  )
}

export default IndexComponent;

