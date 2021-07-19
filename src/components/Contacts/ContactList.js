import React, { Component } from 'react'
import Contact from './Contacts.js';
import {Consumer} from '../../context';

class ContactList extends Component {
    render() {

        return(
            <Consumer>
                {value=>{
                    const {contacts}=value;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger">Contact</span> List
                            </h1>
                            {contacts.map(contact=>(<Contact  key={contact.id} id={contact.id} name={contact.name} mail={contact.email} phone={contact.phone} />))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
        // const {contacts}=this.state;

        // return (
        //     <div>
        //         {contacts.map(contact=>(<Contact  key={contact.id} name={contact.name} mail={contact.email} phone={contact.phone}
        //         deleteClickHandler={this.deleteContact.bind(this,contact.id) } />))}
        //     </div>
        // )
    }
}

export default ContactList;