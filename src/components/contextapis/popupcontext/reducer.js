import TYPES from "./types";



const reducer = (state , action) => {

    const { type ,payload  } = action;

    
    switch(type){

        case TYPES.SHOW_POPUP:
            return {...state, popup: payload}
            
        case TYPES.CLOSE_POPUP:
            return {...state, popup : null}

        default :
            return state;

    }
} 


export default reducer;

