import React, { Component } from 'react';
import './Courses.css';
//import 'react-phone-number-input/style.css'
//import PhoneInput from 'react-phone-number-input'

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email:'',
            cellNo:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(this.state);
    }

    handleChange(event) {
        this.setState({fullName: event.target.fullName});
        this.setState({email: event.target.email});
        this.setState({cellNo: event.target.cellNo});
    }

    handleSubmit(event) {
        alert('A name was submitted: Name : ' + this.state.fullName 
            + '; email : '+this.state.email 
            + '; cell No : '+ this.state.cellNo);
        event.preventDefault();
    }

    render() {
        return (
            <div className="courses-container">
                <div className="container">
                    <div className="courses-info">
                        <form onSubmit={this.handleSubmit}>
                            <label>Full Name :
                            <input placeholder="Enter Your Full Name"    type="text"   value={this.state.fullName} onChange={this.handleChange} />
                            </label>
                            <label>Email :
                            <input placeholder="Enter Your Email"        type="email"  value={this.state.email}    onChange={this.handleChange} />
                            </label>
                            <label>Cell No :
                            <input placeholder="Enter Your Cell No"      type="number" value={this.state.cellNo}   onChange={this.handleChange} />
                            {/* <PhoneInput placeholder="Enter phone number"               /> */}
                            </label>
                            <input className="btn btn-primary m-5" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Courses