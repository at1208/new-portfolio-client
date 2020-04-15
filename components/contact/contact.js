import React, { Component } from 'react';
import './contact.css';
import { Input, Button, Result } from 'antd';
import Navbar from '../container/navbar/navbar';


const { TextArea } = Input;


class Contact extends Component {

   state = {
      name: '',
      email: '',
      message: '',
      sendStatus: null
   }

  onSubmit = () => {
    fetch(`${this.state.email}/${this.state.name}/${this.state.message}`)
      .then((res) => this.setState({ sendStatus: res.status }))
      .catch((err) => console.log(`ERROR: ${err}`))
  }

  render(){
    return <div>
      <Navbar />
    <div className='contact'>
         <div className='text-center'>
            <h1 className='contact-heading'>CONTACT</h1>
            <div className='contact-sub-title'>
            Have a question or want to work together?
            </div>
         </div>
         <div className='text-center container col-sm-5'>
            <Input placeholder="Name" className='name-input' onChange={e => this.setState({ name: e.target.value })}/>
              <br />
            <Input placeholder="Enter email" className='email-input'  onChange={e => this.setState({ email: e.target.value })}/>
              <br />
            <TextArea rows={4} placeholder='Your Message' className='textarea-input'  onChange={e => this.setState({ message: e.target.value })}/>
              <br />
            <Button className='submit-button float-right' onClick={this.onSubmit}>SUBMIT</Button>

          <div className='text-center'>
        {this.state.sendStatus===200 && <Result
        status="success"
        title="Successfully sent"
        />}
        {this.state.sendStatus===404 &&   <Result
          status="error"
          title="Failed to send"
          />}
            </div>
           </div>
           </div>
           </div>
  }
}

export default Contact;
