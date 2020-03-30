import React from 'react';
import SmallButton from './SmallButton'
import MoreOptionsButton from './MoreOptionsButton'

function ButtonBar() {
    return (
        <>
            <div className='buttonBar'>
                <SmallButton /> <SmallButton /> <SmallButton /> <MoreOptionsButton />
            </div>
        </>
    );
}
export default ButtonBar;