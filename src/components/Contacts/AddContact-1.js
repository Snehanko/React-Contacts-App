import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props){
        super(props);

        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();

    }

    onSubmit = (e) =>{
        e.preventDefault();
        const contact={
            name:this.nameInput.current.value,
            email:this.nameInput.current.value,
            phone:this.nameInput.current.value
        }

        console.log(contact)

    }

    static defaultProps= {
        name:'Fred Singh',
        email:'fredsingh@mail.com',
        phone:'999-999-5555'
    }

    render() {
        const {name,email,phone}=this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                tpe="text"
                                name="name"
                                className="form-control formcontrol-lg"
                                placeholder="Enter Name.."
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                tpe="email"
                                name="email"
                                className="form-control formcontrol-lg"
                                placeholder="Enter Email.."
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                tpe="text"
                                name="phone"
                                className="form-control formcontrol-lg"
                                placeholder="Enter Phone.."
                                defaultValue={phone}
                                ref={this.phoneInput}
                            />
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-danger btn-block m-2"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;