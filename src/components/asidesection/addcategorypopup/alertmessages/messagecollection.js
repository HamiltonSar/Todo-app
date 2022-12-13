import React from 'react';
import EmptyMessage from './emptymessage';
import ToolargeMessage from './toolargemessage';
import TooShortMessage from './tooshortmessage';
import ValidMessage from './validmessage';


const messagecollection =  {
    emptymessage : <EmptyMessage />,
    toolargemessage : <ToolargeMessage />,
    tooshortmessage : <TooShortMessage />,
    validmessage : <ValidMessage />

}

export default messagecollection;


