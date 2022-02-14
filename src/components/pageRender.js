import React, { Component } from 'react';
import About from './about';
import Contact from './contact';
import Home from './home';
export default class PageRender extends Component{
    constructor(props){
        super(props)
        this.state={
            page:'HOME_PAGE'
        }
    }
    componentDidUpdate=(prevProps)=>{
        console.log(this.props.pageNum,'jjj')
        if(this.props.pageNum!=prevProps.pageNum){
            console.log(this.props.pageNum,'jjj')
            if(this.props.pageNum===1){
                this.setState({page:'HOME_PAGE'})
            }
            else if(this.props.pageNum===2){
                this.setState({page:'ABOUT'})
            }
             if(this.props.pageNum===3){
                this.setState({page:'CONTACT_US'})
            }
        }
    }
    render(){
        let renderTemplate='';
        if(this.state.page==='HOME_PAGE'){
            renderTemplate=<Home/>
        }
       else if(this.state.page==='ABOUT'){
            renderTemplate=<About/>
        }
       else if(this.state.page==='CONTACT_US'){
            renderTemplate=<Contact/>
        }
        return(
            <div>
                {renderTemplate}
            </div>
        )
    }
}