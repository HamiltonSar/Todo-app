import React, { useReducer , createContext , useContext} from 'react'
import categoryreducer from './categoryreducer';
import categorytypes from './categorytypes';
import messagecollection from '../../asidesection/addcategorypopup/alertmessages/messagecollection';
import { Category_data , Modifying_Data } from './eventfunction';
import { PopUpData } from '../popupcontext/popcontext';

export const CategoryContext = createContext();

const asidecategory = {
    adddatacategory : null ,                    //To add data from input to the new component added into aside
    addcategorycomponent : null,

    message : null ,                            // Message validation popup,
    
    adddmodifiedcomponent : null,               //To delete aside category component
    addmodifydata : null ,                         //To modify data in aside  
}





function CategoryDataContext ( props )  {
    const [categoryState, dispatch] = useReducer( categoryreducer , asidecategory );
    const { ClosePopUp } = useContext( PopUpData );
    
    const AddCategoryComponent = ( categorydata ) => {
        Category_data( categorydata , categoryState , messagecollection );
        dispatch( { type : categorytypes.AddCastegoryComponent, payload : categorydata } );
        ClosePopUp();
    }

    
    const DeleteCategoryComponent = () => {
        dispatch( { type : categorytypes.DeleteCategoryComponent } )
    }

    const AddModifiedCategoryComponent = (datamodified) => {
        Modifying_Data(datamodified , categoryState);
        dispatch( {type : categorytypes.AddModifyCategoryComponent , payload : datamodified } )
        ClosePopUp()
    }


  return (
    <CategoryContext.Provider value={ { categoryState  ,  AddCategoryComponent , DeleteCategoryComponent  , AddModifiedCategoryComponent} }>
        {props.children}
    </CategoryContext.Provider>
  )

}

export default CategoryDataContext;