import React from 'react';
import categorytypes from './categorytypes';
import CategoryComponent from '../../asidesection/categorycomponent/component/categorycomponent';


const categoryreducer = ( state , action ) => {

    const { payload , type  } = action ;


    switch (type) {

        case categorytypes.AddCastegoryComponent:  //Modify red button
            return [...state , { text : payload } ]; 

        case categorytypes.AddModifyCategoryComponent: 
            return  [ { state.filter() } ] ;
        
        default:
            return state;
    }
}

export default categoryreducer;
