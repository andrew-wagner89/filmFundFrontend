/**
 * Created by andrew on 2/14/17.
 */
import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, Col, Row, Grid, FormGroup, HelpBlock,FormControl, Button} from 'react-bootstrap'
import {FacebookButton, FacebookCount, TwitterButton, TwitterCount } from 'react-social'
import './PartTwoSubmit.css'

export class PartTwoSubmit extends React.Component {
    static contextTypes = {
        router: T.object,
    }

    constructor(props, context) {
        super(props, context)

        this.state = {
            value: '',
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            freeSubmits: 1,
            twitterSubmit: 0,
            facebookSubmit: 0,
            errorMessage: ""
        }

        if(!this.state.name){
            this.context.router.push('/home')
        }
    }
    handleChangeIdea(e) {
        this.setState({ value: e.target.value })
    }
    handleChangeName(e) {
        this.setState({ name: e.target.value })
    }
    handleChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    getValidationStateIdea() {
        const length = this.state.value.length
        if (length > 200) return 'error'
        else if (length > 0) return 'success'
        else return 'error'
    }
    getValidationStateName() {
        const length = this.state.name.length
        if (length === 0) return 'error'
        else return 'success'
    }
    getValidationStateEmail() {
        const length = this.state.email.length
        if (length === 0) return 'error'
        else return 'success'
    }
    twitterShared(count){
        if(count > 0 && this.state.twitterSubmit == 0){
            this.setState({
                freeSubmits: this.state.freeSubmits+1,
                twitterSubmit: 1
            })
        }
    }
    facebookShared(count){
        if(count > 0 && this.state.facebookSubmit == 0){
            this.setState({
                freeSubmits: this.state.freeSubmits+1,
                facebookSubmit: 1
            })
        }
    }
    submitAgain(){

        const dataToSend = new FormData();
        dataToSend.append('Email', this.state.email)
        dataToSend.append('Idea', this.state.value)
        dataToSend.append('Submitter', this.state.name)
        fetch('https://script.google.com/macros/s/AKfycbz9fDIv7bhBWb8nTWrkg4-cKjIQ3oG9t0BgbLGnZQOorxR52UOd/exec',
            {
                method: 'POST',
                body: dataToSend
            }
        ).then((res) => {
            if (res.ok)
        {
            res.json().then(res1 => {
                console.log('sent data to sheet')
            localStorage.setItem('idea', this.state.value)
            localStorage.setItem('name', this.state.name)
            localStorage.setItem('email', this.state.email)
        })

        } else {
            alert('unable to send your idea, please email filmfund@gmail.com with your receipt and idea')
        }
    })
    }
    render() {

        return (
            <div className="root">
            <Grid>
            <Row>
            <Col>
            <PanelGroup>
            <Panel header={<PageHeader>Welcome to the Film Fund</PageHeader>}>
    <PageHeader><small>Thanks for entering the competition! <br/>If you want to submit again for free share our competition over social media <br/> One share is worth one more submission</small></PageHeader>
        </Panel>
        <Panel header={<p>Enter round 2 here! </p>}>
            <FacebookButton url="thefilmfund.co" title="The Film Fund" message="Check out our film competition" element={Button}>
                <FacebookCount url="thefilmfund.co" onCount={this.facebookShared.bind(this)}/>
                Share us Facebook!
            </FacebookButton>
            <TwitterButton url="thefilmfund.co" title="The Film Fund" message="Check out our film competition" element={Button}>
                <TwitterCount url="thefilmfund.co" onCount={this.twitterShared.bind(this)}/>
                Share us Twitter!
            </TwitterButton>
    <p>Your Idea</p>
        <FormGroup
            controlId="Idea"
            validationState={this.getValidationStateIdea()}
        >
            <FormControl
                type="textarea"
                value={this.state.value}
                placeholder="Enter your idea here"
                onChange={this.handleChangeIdea.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>{'Current Entry length: ' + this.state.value.length + ' characters. Max allowed length: 200'}</HelpBlock>
        </FormGroup>
        <p>Your Name</p>
        <FormGroup
            controlId="Submitter"
            validationState={this.getValidationStateName()}
        >
            <FormControl
                type="textarea"
                value={this.state.name}
                placeholder="Enter your name here"
                onChange={this.handleChangeName.bind(this)}
            />
            <FormControl.Feedback />
        </FormGroup>
        <p>Your Email</p>
        <FormGroup
            controlId="Email"
            validationState={this.getValidationStateEmail()}
        >
            <FormControl
                type="textarea"
                value={this.state.email}
                placeholder="Enter your email here"
                onChange={this.handleChangeEmail.bind(this)}
            />
            <FormControl.Feedback />
        </FormGroup>
            <Button onClick={this.submitAgain.bind(this)} disabled={this.state.freeSubmits > 0 ? false: true}> Click Here to Submit again <br/> You have {this.state.freeSubmits} free submissions left!</Button><br/><br/>
            <Button onClick={() => {this.context.router.push('home')}}>Return to the Home Screen</Button>
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
export default PartTwoSubmit