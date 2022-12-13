import React from 'react';
import categorytypes from './categorytypes';
import CategoryComponent from '../../asidesection/categorycomponent/component/categorycomponent';


const categoryreducer = ( state , action ) => {

    const { payload , type  } = action ;


    switch (type) {

        case categorytypes.AddCastegoryComponent:  //Modify red button
            return { ...state , addcategorycomponent :  <CategoryComponent/>  }; 

        case categorytypes.DeleteCategoryComponent: //Delete green button
            return { ...state , addcategorycomponent : null }; 

        case categorytypes.AddModifyCategoryComponent: 
            return { ...state  , addmodifydata : payload};
        
        default:
            return state;
    }
}

export default categoryreducer;
