import React, { Component } from 'react';
import './add-responsibility.css';
import axios from 'axios';
import { formatPostData } from '../../helpers';
import { connect } from 'react-redux';

class AddResponsibility extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                title: '',
                details: '',
                name: '',
                completed: false,
                trip_id: this.props.trip_id
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { form } = this.state;
        this.setState({ form: { ...form, [name]: value } });
    }



    handleFormSubmit(event) {
        event.preventDefault();
        // make call to database to add item to responsibilities table

        const dataToSend = {
            title: this.state.form.title,
            details: this.state.form.details,
            name: this.state.form.name,
            completed: false,
            trip_id: this.props.trip_info.trip_id
        }

        const params = formatPostData(dataToSend);
        const resp = axios.post('api/add_responsibilities.php', params);
        const newState = {
            form: {
                title: '',
                details: '',
                name: '',
                completed: false,
                trip_id: this.props.trip_info.trip_id
            }
        }
        this.setState(newState);
        this.props.history.push('/responsibilities');
    }
    render() {
        const { title, details, name, } = this.state.form;
        return (
            <div>
                <div className="title">RESPONSIBILITIES</div>
                <div className="add-resp-form">
                    <form onSubmit={(event) => { this.handleFormSubmit(event) }}>
                        <div className="inputs">
                            <div><label>Responsibility</label></div>
                            <input className="standard-input" type="text" name="title" value={title} placeholder="Responsibility" onChange={this.handleChange} />
                            <div>
                                <label>Person Responsible</label>
                            </div>
                            <input className="standard-input" type="text" name="name" value={name} placeholder="Person Responsible" onChange={this.handleChange} />
                        </div>
                        <textarea className="standard-textarea" name="details" rows="10" value={details} placeholder="Add Details" onChange={this.handleChange}></textarea>
                        <div className="buttons"><button className="pink-btn">ADD</button></div>

                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        trip_info: state.user.details
    }
}

export default connect(mapStateToProps)(AddResponsibility);