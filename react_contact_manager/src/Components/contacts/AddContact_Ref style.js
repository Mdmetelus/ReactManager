import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  // state = {
  //   name: '',
  //   email: '',
  //   phone: '',
  // }

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const contact ={
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    }

    console.log(contact)

  }

  static default props = {
    name: 'Fred Johnson',
    email: 'Freaf@yahoo.com',
    phone: '888-888-8888'
  }

  


  render() {
    return (

      <div className="ACbox">
        <div className="ACBoxHeader">
          Add Contact
        </div>


        <div className='ACBoxBody'>


          <form onSubmit={this.onSubmit} >
            <div className='formGroup'>
              <label htmlFor="name" >Name</label>
              <input type="text"
                className="formControlFormControlLg"
                placeholder="Enter Name..."
                defaultValue={this.props.name}
                ref={this.nameInput} ></input>
            </div>

            <div className='formGroup'>
              <label htmlFor="email" >Email</label>
              <input type="email"
                className="formControlFormControlLg"
                placeholder="Enter Your Email..."
                defaultValue={this.props.email}
                ref={this.emailInput}></input>
            </div>

            <div className='formGroup'>
              <label htmlFor="phone" >Phone</label>
              <input type="text"
                className="formControlFormControlLg"
                placeholder="Enter Phone..."
                defaultValue={this.props.phone}
                ref={this.phoneInput}></input>
            </div>
            <input type="submit" value="Add Contact"
              className="BtnBtnBlock" />
          </form>

        </div>

      </div>
    )
  }
}

export default AddContact

