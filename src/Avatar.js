import React from 'react';
import './style.css';
import 'tachyons';
import list from './list'

const Avatar = (props) => {

    const avatarlist = [
        {
            id:1,
            name: "Alvin",
            work: "Web Developer"
        },
        {
            id:2,
            name: "Johnny",
            work: "Front End"
        },
        {
            id:3,
            name: "Rocky",
            work: "Back End"
        },
        {
            id:4,
            name: "Codi",
            work: "Data Base"
        }
    ]
    return ( <div>
        <h1> Welcome to Avatar World </h1>

    <list id={avatarlist[0].name}
            name={avatarlist[0].name}
            work={avatarlist[0].name}/>
    <list id={avatarlist[1].name}
            name={avatarlist[1].name}
            work={avatarlist[1].name}/>
    <list id={avatarlist[2].name}
            name={avatarlist[2].name}
            work={avatarlist[2].name}/>
    <list id={avatarlist[3].name}
            name={avatarlist[3].name}
            work={avatarlist[3].name}/>

    <button>Subscribe</button> </div>   
    )
}

export default Avatar;