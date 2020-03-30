import React from 'react';
import MoreOptionsImg from '../img/MoreOptions.PNG';

function MoreOptionsButton() {
    return (
        <>
            <button className='button reply-button' type='submit'><img src={MoreOptionsImg}></img></button>
        </>
    );
}
export default MoreOptionsButton;