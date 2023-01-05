import React from 'react';
import styles from "./../styles/header.module.css";
import HeaderStoneLogo from "./../../../assets/gallery/logo.png";
import { useState } from 'react';
import iconsglobal from '../../../assets/font-awesomeicons/icons';
import { Link } from 'react-router-dom';

function Header  ()  {

    const [ darkmode, setDarkMode ] = useState( false );
    const SwitchDarkMode = () => setDarkMode( !darkmode );

  return (
    <div  className = {styles.headercontainer} >

        <div className = {styles.headerlogocontainer} >
            <img className = {styles.headerlogo}  src = { HeaderStoneLogo } alt="" />
        </div>

        <div className = {styles.navcontainer} >

            <nav className = { styles.nav} >
                    <li className = { styles.listheader } > <Link className = {styles.linkslist} to = { "/profile" }>Profile<i>{iconsglobal.profileIcon}</i></Link></li>
                    <li className = { styles.listheader } > <Link className = {styles.linkslist} to = { "/settings" }>Settings<i>{iconsglobal.settingIcon}</i></Link></li>
            </nav>

            <div className =  {styles.textmodecontainer}>
                {darkmode ? <button className = {styles.darkmodeicon} onClick ={ ()=> SwitchDarkMode() }> Dark mode <i> { iconsglobal.darkModeIcon } </i> </button>
                          : <button className = {styles.lightmodeicon} onClick ={ ()=> SwitchDarkMode() }> Light mode <i> { iconsglobal.lightModeIcon } </i> </button>   
                 }
                 <button className = {styles.buttonlogin} > Log out <i className = {styles.loginicon} > { iconsglobal.logoutIcon } </i> </button>
            </div>

        </div>
    </div>
  )
}

export default Header;
