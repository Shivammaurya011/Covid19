import React, { Component } from 'react';
import axios from 'axios';
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            districts: [],
            selectedDist: '',
            bookSlot: []
          }
    }
    componentDidMount() {
        axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/9`)
          .then(res => {
            const districts = res.data.districts;
            this.setState({ districts });
        })
        
      }
      handleDistrict(event){
          this.setState({selectedDist: event.target.value})
          axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${event.target.value}&date=09-12-2021`)
          .then(res => {
            const bookSlot = res.data.sessions;
            this.setState({ bookSlot });
            console.log(bookSlot)
        })
          console.log(this.state.selectedDist)
      }
    render(){
        return(
            <div>
                <b>State - </b>
                <b style={{color:'green'}}>New Delhi</b>
                <br/>
                <div>
                <b>District - </b>
                <select value={this.state.selectedDist} onChange={(e)=>this.handleDistrict(e)} className='selection' style={{color:'green'}}>
                    {this.state.districts.map((district) => (
                    <option value={district.district_id}>{district.district_name}</option>
                    ))}
                </select>
                {this.state.bookSlot.length === 0 ? <label style={{color: 'Red'}}>Please Select a District</label>:''}
                </div>
                <div>
                {this.state.bookSlot.map((slots)=>(
                    <>
                    <hr/>
                    <label><b>Hosptal Name : </b>{slots.name}</label><br/>
                    <label><b>Address : </b>{slots.address}</label><br/>
                    <label><b>State : </b>{slots.state_name}</label><br/>
                    <label><b>District : </b>{slots.district_name}</label><br/>
                    <label><b>Pincode : </b>{slots.pincode}</label><br/>
                    <label><b>Fee Type : </b>{slots.fee_type}</label><br/>
                    <label><b>Date : </b>{slots.date}</label><br/>
                    <label><b>Available Capacity : </b>{slots.available_capacity}</label><br/>
                    <label><b>Available Capacity Dose1 : </b>{slots.available_capacity_dose1}</label><br/>
                    <label><b>Available Capacity Dose2 : </b>{slots.available_capacity_dose2}</label><br/>
                    <label><b>Vaccine Name : </b>{slots.vaccine}</label><br/>
                    <label><b>Available Slots : </b>{slots.slots}</label><br/>
                   
                    </>
                ))}
                </div>

            </div>
        )
    }
}