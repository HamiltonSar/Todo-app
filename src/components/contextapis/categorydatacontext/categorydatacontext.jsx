import React, { useReducer , createContext , useContext} from 'react'
import categoryreducer from './categoryreducer';
import categorytypes from './categorytypes';
import messagecollection from '../../asidesection/addcategorypopup/alertmessages/messagecollection';
import { Category_data , Modifying_Data } from './eventfunction';
import { PopUpData } from '../popupcontext/popcontext';
import ToolargeMessage from '../../asidesection/addcategorypopup/alertmessages/toolargemessage';
import TooShortMessage from '../../asidesection/addcategorypopup/alertmessages/tooshortmessage';
import EmptyMessage from '../../asidesection/addcategorypopup/alertmessages/emptymessage';
import ValidMessage from '../../asidesection/addcategorypopup/alertmessages/validmessage';
import faker from "@faker-js/faker";

export const CategoryContext = createContext();





const asidecategory = [{
    id : faker.random.uuid(),
    text : null , 
    textReplaced : null , 
    message : null
}];


function CategoryDataContext ( props )  {

    const messagecollection = {
        tooLarge : < ToolargeMessage /> , 
        tooShort : < TooShortMessage /> , 
        empty : < EmptyMessage /> , 
        validmessage : <ValidMessage />
    }

    const [ categoryState, dispatch ] = useReducer( categoryreducer , asidecategory );
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
        dispatch( {type : categorytypes.AddModifyCategoryComponent , payload : datamodified } )
        Modifying_Data(datamodified , categoryState);
        ClosePopUp();
    }


  return (
    <CategoryContext.Provider value={ { categoryState  ,  AddCategoryComponent , DeleteCategoryComponent  , AddModifiedCategoryComponent} }>
        {props.children}
    </CategoryContext.Provider>
  )

}

export default CategoryDataContext;