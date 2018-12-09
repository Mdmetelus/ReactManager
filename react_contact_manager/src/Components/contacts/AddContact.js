import React, { Component } from 'react'
import { Consumer } from '../../context';
import uuid from "uuid"
import TextInputGroup from '../layout/TextInputGroup';

 class AddContact extends Component {
   state = {
     name: '',
     email: '',
     phone: '',
   }

   onSubmit = (dispatch, e) => {
     e.preventDefault();
     console.log(this.state);
     const{ name , email , phone } = this.state;

     const newContact = {
       id: uuid(),
       name,
       email,
       phone
     }

     dispatch({ type : 'ADD_CONTACT', payload: newContact})
     
    //  clear state
     this.setState({
       name: '',
       email:'',
       phone: ''
     });
   }

   

   OnChange = () => this.setState({[e.target.name]: e.target.value});


  render() {

    return(

      <Consumer>
          {value => { const { dispatch } = value;
          return(

            <div className="ACbox">
              <div className="ACBoxHeader">
                Add Contact
        </div>


              <div className='ACBoxBody'>


                <form onSubmit={this.onSubmit.bind(this, dispatch)} >
                  <TextInputGroup
                  label="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={this.onChange} />

                  <TextInputGroup
                    label="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange} />

                  <TextInputGroup
                    label="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange} />

                  <TextInputGroup
                    label="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange} />

                  <div className='formGroup'>
                    <label htmlFor="email" >Email</label>
                    <input type="email"
                      className="formControlFormControlLg"
                      placeholder="Enter Your Email..."
                      value={this.state.email}
                      onChange={this.onChange} ></input>
                  </div>

                  <div className='formGroup'>
                    <label htmlFor="phone" >Phone</label>
                    <input type="text"
                      className="formControlFormControlLg"
                      placeholder="Enter Phone..."
                      value={this.state.phone}
                      onChange={this.onChange} ></input>
                  </div>
                  <input type="submit" value="Add Contact"
                    className="BtnBtnBlock" />
                </form>

              </div>

            </div>
          );

        
        }}
      </Consumer>
    );
  }
}

export default AddContact

