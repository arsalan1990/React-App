import React,{Component} from 'react';
import './style.css'

class Demo extends Component{
    render(){
        return <div class="main_style">
         <h1>Hello {this.props.name}    </h1>
        <p> Welcome to my channel</p>
        <p> This is my new tv channel.</p>
        </div>
    }
}
export default Demo;