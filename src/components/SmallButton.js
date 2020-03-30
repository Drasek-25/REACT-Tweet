import React from 'react';
import ReplyImg from '../img/reply.PNG';

function SmallButton() {
    return (
        <>
            <button className='button reply-button' type='submit'><img src={ReplyImg}></img></button>
        </>
    );
}
export default SmallButton;