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