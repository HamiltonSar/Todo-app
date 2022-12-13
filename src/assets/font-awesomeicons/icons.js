import { faCheck, faCircleExclamation, faEllipsisVertical, faMagnifyingGlass, faPlus, faTrash, faWindowRestore, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const searchIcon = < FontAwesomeIcon icon={ faMagnifyingGlass } />;
const optionBarIcon = <FontAwesomeIcon icon={ faEllipsisVertical } />;
const deleteTrashIcon = < FontAwesomeIcon icon={ faTrash } />
const modifyIcon = < FontAwesomeIcon icon={ faWindowRestore } />
const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const cancelIcon = <FontAwesomeIcon icon={faXmark} />;
const alertIcon = <FontAwesomeIcon icon={faCircleExclamation} />
const checkIcon = <FontAwesomeIcon icon={ faCheck } />


const iconsglobal = {
    searchIcon,
    optionBarIcon,
    deleteTrashIcon,
    modifyIcon,
    plusIcon,
    cancelIcon,
    alertIcon,
    checkIcon
}

export default iconsglobal;