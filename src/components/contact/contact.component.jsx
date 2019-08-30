import React from 'react';

import FormInput from '../form-input/form-input.component';
import './contact.styles.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            message: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', message: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState ({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <div> <p>Send me a message, i'll get back to you.</p></div>
                <form action="https://formspree.io/luke0145555@hotmail.co.uk" method="POST">
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        label="email"
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="message"
                        type="text"
                        value={this.state.message}
                        required
                        label="message"
                        handleChange={this.handleChange}
                    />
                    <button className='submit-button'>SUBMIT</button>

                </form>

            </div>
        )
    }
}

export default Contact;