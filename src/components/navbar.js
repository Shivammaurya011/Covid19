import React, {Component} from 'react';

export default class Navbar extends Component{
    constructor(props){
            super(props)
            this.state = {
                currentPage: "HOME"
            }
    }
    handleNavbarPage=(pageName)=>{
        if(pageName==='HOME'){
            this.props.page(1)
            this.setState({currentPage:"HOME"})
        }
        else if(pageName==='ABOUT'){
            this.props.page(2)
            this.setState({currentPage:"ABOUT"})

        }
        else if(pageName==='CONTACT'){
            this.props.page(3)
            this.setState({currentPage:"CONTACT"})

        }
    }
    render(){
        return(
            <>
            <div className='navbar'>
                <a onClick={()=>this.handleNavbarPage('HOME')} className={this.state.currentPage!=`HOME`?"navbarHeader":'selectedHeader'}>Home</a>
                <a onClick={()=>this.handleNavbarPage('ABOUT')} className={this.state.currentPage!=`ABOUT`?"navbarHeader":'selectedHeader'}>About Cowin</a>
                <a onClick={()=>this.handleNavbarPage('CONTACT')} className={this.state.currentPage!=`CONTACT`?"navbarHeader":'selectedHeader'}>Contact us</a>
            </div>
            </>
        )
    }
}