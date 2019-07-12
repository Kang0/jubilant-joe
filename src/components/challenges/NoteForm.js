import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { submitNote } from '../../actions/actionCalendar'

class NoteForm extends Component {
    state = {
        note: ""
    }

    handleOnChange = (e, { name, value }) => this.setState({ [name]: value })

    handleOnSubmit = (note, challengeId, dateId) => {
        this.props.submitNote(note, challengeId, dateId)
    }

    render(){
        const { note } = this.state
        const { challengeId, dateId } = this.props

        return(
            <Form onSubmit={() => this.handleOnSubmit(note, challengeId, dateId)}>
                <Form.TextArea placeholder="...anything noteworthy?" name='note' value={note} onChange={this.handleOnChange} />
                <Form.Button>Submit</Form.Button>
            </Form>
        )
    }
}

export default connect(null, { submitNote })(NoteForm)