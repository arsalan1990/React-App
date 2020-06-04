import React from 'react';
import './style.css';
import 'tachyons';

const Avatar = () => {
    return (
    <div class = "avatar_style ma4 bg-light-purple dib">
        <img src="https://joeschmoe.io/api/v1/alvin" alt="Avatar" />
    <h1 className=""> Alvin </h1>
    <p> Web Developer</p>
    </div>
    )
}

export default Avatar;