import React from 'react';
import styles from "../styles/searchaside.module.css";
import iconsglobal from '../../../../assets/font-awesomeicons/icons';




function SearchAside  ()  {
  return (
    <div className= {styles.searchcontainer} >
        <input className=  {styles.inputsearch} type= "search" placeholder='Search for...'/>
        <button className= {styles.buttoniconsearch} ><i> { iconsglobal.searchIcon } </i></button>
    </div>
  )
}

export default SearchAside;


