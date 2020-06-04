import React from 'react';
import './style.css';
import 'tachyons';
import list from './list'

const Avatar = (props) => {
    return ( <div>
        <h1> Welcome to Avatar World </h1>

    <list id="1" name="Alvin" work="Web Developer"/>
    <list id="1" name="Johnny" work="Front End"/>
    <list id="1" name="Rocky" work="Back End"/>
    <list id="1" name="Codi" work="Designer"/>

    <button>Subscribe</button> </div>   
    )
}

export default Avatar;