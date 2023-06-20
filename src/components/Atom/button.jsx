import React from 'react';

function ButtonAtom(props) {
    return (
        <button type='submit' className= {`btn btn-darkpurple px-3 fs-4`} >{props.val_name}</button>
     );
}

export default ButtonAtom;