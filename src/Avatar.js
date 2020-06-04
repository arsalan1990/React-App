import React, {Component} from 'react';
import './style.css';
import 'tachyons';
import list from './list';

class Avatar extends Component{

    constructor(){
        super();
        this.state={
            name: "welcome to Avatar World "
        }
    }

    namechange(){
        this.setState({
            name: "Subscribe"
        })
    }
        render() {
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
        
           const avatar_card =  avatarlist.map((avatarcard, i) => {
                return <list key={i} id={avatarlist[i].name}
                            name={avatarlist[i].name}
                            work={avatarlist[i].work}/>
            })
            return ( 
                <div className="mainpage">
                    <h1> {this.state.name} </h1>
            
                    {avatar_card}
            
                <button onClick={()=> this.namechange()}>Subscribe</button> 
                </div> 
                )
        }
    }


export default Avatar;