import React from 'react';
import './style.css';
import 'tachyons';
import list from './list';

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

   const avatar_card =  avatarlist.map((avatarcard, i) =>{
        return <list id={avatarlist[i].name}
                    name={avatarlist[i].name}
                    work={avatarlist[i].work}/>
    })
    return ( 
    <div>
        <h1> Welcome to Avatar World </h1>

        {avatar_card}

    <button>Subscribe</button> 
    </div> 
    )
}

export default Avatar;