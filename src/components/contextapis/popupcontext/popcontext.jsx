import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import reducer from './reducer';
import TYPES from './types';



export const PopUpData = createContext();


function PopUpContext (props) {
  
  const popupState = {addcategorypopup : null};

  const ShowPopUp = (component) => {
    dispatch( { type : TYPES.SHOW_POPUP , payload : component } )
  }
  
  const ClosePopUp = () => {
    dispatch( {type : TYPES.CLOSE_POPUP}
    )
  }


  const [state, dispatch] = useReducer(reducer , popupState);

  return (
    <PopUpData.Provider value={ { state , ShowPopUp , ClosePopUp  } }>
        {props.children}
    </PopUpData.Provider>
  )

}

export default PopUpContext;

