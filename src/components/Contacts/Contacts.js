import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';

import {FaSortDown} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import {FaPencilAlt} from 'react-icons/fa';
import axios from 'axios';


class Contacts extends Component {
    // static propTypes={
    //     name:PropTypes.string.isRequired,
    //     mail:PropTypes.string.isRequired,
    //     phone:PropTypes.string.isRequired
    // }
    
    state={
        showContactInfo:false
    };

    // constructor(){
    //     super();
    //     this.state={};

    //     this.onShowClick=this.onShowClick.bind(this);
    // }


    onShowClick=(e)=>{
        this.setState({showContactInfo:!this.state.showContactInfo});
    }

    onDeleteClick= async (id,dispatch)=>{
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type:'DELETE_CONTACT',payload:id})  ;
        }
        catch(e){
            dispatch({type:'DELETE_CONTACT',payload:id})  ;
        }

    }

    render() {
        const {id,name,mail,phone}=this.props;

        const {showContactInfo}=this.state;

        return (
            <Consumer>
                {value=>{
                    const {dispatch}=value;

                    return(
                        <div className="card card-body mb-3">
                                <h4>{name}{' '}
                                <FaSortDown onClick={this.onShowClick} style={{cursor:'pointer'}}/>

                               <Link to={`contact/edit/${id}`}><FaPencilAlt style={{cursor:'pointer',float:'right',color:'black',marginLeft:'1rem'}}/></Link>
                                <AiFillDelete  style={{cursor:'pointer',float:'right',color:'red'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}/>
                            </h4>
                            {showContactInfo ? <ul className="list-group">
                                <li className="list-group-item">Email: {mail}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul> : null }
                         </div>
                    )
                }}
            </Consumer> 
        );
    }
}

Contacts.propTypes={
    name:PropTypes.string.isRequired,
    mail:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired
}

export default Contacts;
