import { faCheck, faCircleExclamation, faEllipsisVertical, faMagnifyingGlass, faPlus, faTrash, faWindowRestore, faXmark , faMoon , faSun , faRightToBracket , faRightFromBracket ,  faUser ,  faGear , faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const searchIcon = < FontAwesomeIcon icon={ faMagnifyingGlass } />;
const optionBarIcon = <FontAwesomeIcon icon={ faEllipsisVertical } />;
const deleteTrashIcon = < FontAwesomeIcon icon={ faTrash } />
const modifyIcon = < FontAwesomeIcon icon={ faWindowRestore } />
const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const cancelIcon = <FontAwesomeIcon icon={faXmark} />;
const alertIcon = <FontAwesomeIcon icon={faCircleExclamation} />
const checkIcon = <FontAwesomeIcon icon={ faCheck } />
const darkModeIcon = <FontAwesomeIcon icon={ faMoon } />
const lightModeIcon = <FontAwesomeIcon icon={ faSun } />
const loginIcon = <FontAwesomeIcon icon={ faRightToBracket } />
const logoutIcon = <FontAwesomeIcon icon={ faRightFromBracket } />
const profileIcon = <FontAwesomeIcon icon={ faUser } />
const settingIcon = <FontAwesomeIcon icon={ faGear } />
const targetIcon = <FontAwesomeIcon icon={ faBullseye } />





const iconsglobal = {
    searchIcon,
    optionBarIcon,
    deleteTrashIcon,
    modifyIcon,
    plusIcon,
    cancelIcon,
    alertIcon,
    checkIcon,
    darkModeIcon,
    lightModeIcon,
    loginIcon , 
    logoutIcon,
    profileIcon,
    settingIcon,
    targetIcon, 

}

export default iconsglobal;