import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class NoteForm extends Component {
    state = {
        note: ""
    }

    handleOnChange = (e, { name, value }) => this.setState({ [name]: value })

    handleOnSubmit = () => {
    }

    render(){
        const { note } = this.state

        return(
            <Form>
                <Form.TextArea placeholder="...anything noteworthy?" name='note' value={note} onChange={this.handleOnChange} />
                <Form.Button>Submit</Form.Button>
            </Form>
        )
    }
}

export default NoteForm