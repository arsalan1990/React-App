import React,{Component} from 'react';


class Demo extends Component{
    render(){
        return <div>
         <h1>Hello {this.props.name}</h1>
        <p> Welcome to my channel</p>
        <p> This is my new tv channel.</p>
        </div>
    }
}
export default Demo;