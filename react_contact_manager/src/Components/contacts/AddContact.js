import React, { Component } from 'react'

 class AddContact extends Component {
   state = {
     name: '',
     email: '',
     phone: '',
   }
  render() {
    return (
      <div className="ACbox">
        <div className="ACBoxHeader">
        Add Contact
        </div>
        <div className = 'ACBoxBody'>
         <form>
          <div className='formGroup'>
            <label htmlFor="name" >Name</label>
            <input type="text"
            className="formControlFormControlLg"
            placeholder="Enter Name..." 
            value={this.state.name}></input>
          </div>

            <div className='formGroup'>
              <label htmlFor="email" >Email</label>
              <input type="email"
                className="formControlFormControlLg"
                placeholder="Enter Your Email..." 
                value={this.state.email}></input>
            </div>

            <div className='formGroup'>
              <label htmlFor="phone" >Phone</label>
              <input type="text"
                className="formControlFormControlLg"
                placeholder="Enter Phone..." 
                value={this.state.phone}></input>
            </div>
            <input type="submit" value="Add Contact"
            className="BtnBtnBlock"/>
         </form>
        </div>
        
      </div>
    )
  }
}

export default AddContact

