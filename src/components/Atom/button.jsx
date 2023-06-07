import React, { Component } from 'react';

function ButtonAtom(props) {
    return (
        <button type='submit' className= {`btn btn-darkpurple`} >{props.val_name}</button>
     );
}

export default ButtonAtom;