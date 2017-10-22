/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, FormGroup, HelpBlock,FormControl, Button, Image, Grid, Col, Row} from 'react-bootstrap'
import logobig from '../../Images/logobig.png'

import './MainPage.css'

export class MainPage extends React.Component {
    static contextTypes = {
        router: T.object,
    }

    constructor(props, context) {
        super(props, context)

        this.state = {
            value: "",
            errorMessage: "",
            returnedFromSubmit: sessionStorage.getItem('returnedFromSubmit')
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
                <PanelGroup >
                    <Image className="centered" src={logobig}/>
                    <Panel className="black" header={<PageHeader>Get up to $10,000 to make your short film by writing one sentence.</PageHeader>}>
                        <Col xs={12} md={10} mdOffset={1}>
                        <h1 className="black"><small>
                            <h1 className="question"> Why The Film Fund?</h1><br/>
                            Starting out as an independent filmmaker, I found myself struggling to raise financing and find resources for my film projects. It appeared that those who already had industry experience or access to better resources and crew dominated most contests.<br/><br/>
                            We're providing funding up to $10,000 for a short film in a way that's a lot simpler than screenwriting contests, crowdfunding, or applying to grants, because I'm sick of seeing these funding avenues dominated by industry experts (i.e. Zach Braff raising 3+ million on Kickstarter).<br/><br/>
                            – Thomas Verdi, Founder and CEO
                        </small></h1>
                        <br/><br/>
                        <h1 className="question">How Do I Enter?</h1>
                            <h1><small>Craft and submit one sentence with a compelling premise that also conveys why you need this funding to achieve your vision. Our judges will pick the best one. To see how easy it is, the first round is free to enter. Then you and your brilliant sentence can choose to pay $25 to enter the second round for a chance to win up to $10,000. See examples <a href="#examples">here</a>, and enter below.<br/><br/>
                            Sentences judged on:<br/>
                            1) Compelling Premise<br/>
                            2) Creative Utilization of Funds</small></h1>
                        </Col>
                    </Panel>
                  /  {
                        !this.state.returnedFromSubmit ?
                            (<Panel className="black">
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

                            </Panel>)
                        : null}

                </PanelGroup>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default MainPage