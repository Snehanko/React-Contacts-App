import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../Layout/TextInputGroup';
import {v4 as uuidv4} from 'uuid';

class AddContact extends Component {

    state={
        name:'',
        email:'',
        phone:'',
        errors:{}
    };

    onSubmit = (dispatch,e) =>{
        e.preventDefault();
        
        const {name,email,phone}=this.state;

        //Check for Error-
        if(name ===''|name ===' '){
            this.setState({errors:{name:'Name is required'}});
            return;
        }
        if(email ===''|email ===' '){
            this.setState({errors:{email:'Name is required'}});
            return;
        }
        if(phone ===''|phone ===' '){
            this.setState({errors:{phone:'Name is required'}});
            return;
        }
        

        const newContact = {
            id:uuidv4,
            name,
            email,
            phone
        }

        dispatch({type:'ADD_CONTACT',payload:newContact})
        
        //Clear Field
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })
    }

    onChange = (e) =>this.setState({[e.target.name]:e.target.value});


    render() {
        const {name,email,phone,errors}=this.state;

        return (
            <Consumer>
                {value =>{
                    const {dispatch} =value;

                   return <div className="card mb-3">
                        <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <TextInputGroup 
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name.."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name} />
                            <TextInputGroup 
                                        label="Email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email.."
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email} />
                            <TextInputGroup 
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone.."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone} />
                                
                                <input type="submit" value="Add Contact" className="btn btn-danger btn-block mt-2"/>
                            </form>
                        </div>
                    </div>
                }}
            </Consumer>
        )
    }
}

export default AddContact;
