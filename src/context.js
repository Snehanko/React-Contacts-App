import React, { Component } from 'react'

const Context=React.createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts:state.contacts.filter(contact=>contact.id !==action.payload)
            };

        case 'ADD_CONTACT':
            return{
                ...state,
               contacts:[action.payload,
                ...state.contacts]
            };

        default:
            return state;
    }
};

export class Provider extends Component {
    constructor(props){
        super(props);

        this.state={
            contacts:[
                {
                    id:1,
                    name:'John Doe',
                    email:'jdoe@mail.com',
                    phone:'55-555-8888'
                },
                {
                    id:2,
                    name:'Steve Smith',
                    email:'steve@mail.com',
                    phone:'22-333-777'
                },
                {
                    id:3,
                    name:'Karen Williams',
                    email:'karen@mail.com',
                    phone:'99-111-555'
                }
            ],
    
            dispatch:action=>{
                this.setState(state=>reducer(state,action));
            }
        }

    }
    
    render(){
        return (
            <div>
                 <Context.Provider value={this.state}>
                     {this.props.children}
                 </Context.Provider>
            </div>
        )
    }
}

export const Consumer=Context.Consumer;
 
