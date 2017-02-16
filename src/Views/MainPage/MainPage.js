/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, Col, Row, Grid, FormGroup, HelpBlock,FormControl, Button} from 'react-bootstrap'
import './MainPage.css'

export class MainPage extends React.Component {
    static contextTypes = {
        router: T.object,
    }

    constructor(props, context) {
        super(props, context)

        this.state = {
            value: "",
            errorMessage: ""
        }

        localStorage.setItem('idea', "")
        localStorage.setItem('name', "")
        localStorage.setItem('email', "")
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
        const length = this.state.value.length
        if (length > 200) {
            this.setState({
                errorMessage: "Please shorten your idea to 200 characters or less"
            })
        } else if(length > 0){
            localStorage.setItem('idea', this.state.value)
            this.context.router.push('secondsubmission')
        } else {
            this.setState({
                errorMessage: "Please input an idea"
            })
        }
    }
    render() {

        return (
            <div className="root">
                <Grid>
                    <Row>
                        <Col>
                            <PanelGroup >
                                <Panel className="panel-transparent" header={<PageHeader className="panel-transparent">Welcome to the Film Fund</PageHeader>}>
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
                                    <Button bsStyle="primary" onClick={this.submitIdea.bind(this)}>
                                        Submit your idea
                                    </Button>
                                    <p>{this.state.errorMessage}</p>
                                    <PageHeader><small>Thanks for entering Round 1 to see what we’re all about. <br/>If you want a shot at the funding, choose to enter Round 2 now!</small></PageHeader>
                                </Panel>
                                <Panel>
                                    <PageHeader><small>Info about the film fund here Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim. Mei modo vocibus ea. Quo eu summo legere. Vix at solet interesset, no deserunt iracundia scripserit per. Sit eu nominavi molestie convenire. Ad eam veritus referrentur, deleniti gloriatur definiebas et pro.</small></PageHeader>
                                </Panel>

                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default MainPage