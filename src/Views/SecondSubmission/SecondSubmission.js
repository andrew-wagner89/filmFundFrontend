/**
 * Created by andrew on 2/5/17.
 */
import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, Col, Row, Grid, FormGroup, HelpBlock,FormControl, Button} from 'react-bootstrap'
import './SecondSubmission.css'

export class SecondSubmission extends React.Component {
    static contextTypes = {
        router: T.object,
    }

    constructor(props, context) {
        super(props, context)

        this.state = {
            value: localStorage.getItem('idea'),
            errorMessage: ""
        }
    }
    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    getValidationState() {
        const length = this.state.value.length
        if (length > 200) return 'error'
        else if (length > 0) return 'success'
    }
    submitIdea(){
        alert('not implemented yet')
    }
    render() {

        return (
            <div className="root">
                <Grid>
                    <Row>
                        <Col>
                            <PanelGroup>
                                <Panel header={<PageHeader>Welcome to the Film Fund</PageHeader>}>
                                    <PageHeader><small>Thanks for submitting your idea! <br/>If you want a shot at the funding, pay up!</small></PageHeader>
                                </Panel>
                                <Panel header={<p>Enter round 2 here! </p>}>
                                    <FormGroup
                                        controlId="formBasicText"
                                        validationState={this.getValidationState()}
                                    >
                                        <FormControl
                                            type="textarea"
                                            value={this.state.value}
                                            placeholder="Enter your idea here"
                                            onChange={this.handleChange.bind(this)}
                                        />
                                        <FormControl.Feedback />
                                        <HelpBlock>{'Current Entry length: ' + this.state.value.length + ' characters. Max allowed length: 200'}</HelpBlock>
                                    </FormGroup>
                                    <p>tbd payment stuff here</p>
                                    <Button bsStyle="Primary" onClick={this.submitIdea.bind(this)}>
                                        Submit your idea
                                    </Button>
                                    <p>{this.state.errorMessage}</p>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default SecondSubmission