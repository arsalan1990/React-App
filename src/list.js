import React from 'react';

const list = (props) => {
    return(
    <div class = "avatar_style ma4 bg-light-purple dib pa4 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
    <h1 className=""> {props.name} </h1>
    <p> {props.work}</p>
    </div>
    )
}

export default list;