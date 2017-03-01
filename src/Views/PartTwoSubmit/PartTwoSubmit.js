/**
 * Created by andrew on 2/14/17.
 */
import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, Col, Row, Grid, FormGroup, HelpBlock,FormControl, Button} from 'react-bootstrap'
import {generateShareIcon, ShareButtons} from 'react-share';
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
            freeSubmits: 0,
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
    twitterShared(){
        return new Promise((resolve, reject) => {
            if (this.state.twitterSubmit === 0) {
                this.setState({
                    freeSubmits: this.state.freeSubmits + 1,
                    twitterSubmit: 1
                })
            }
            resolve()
        })
    }
    facebookShared(){
        return new Promise((resolve, reject) => {
            if(this.state.facebookSubmit === 0){
                this.setState({
                    freeSubmits: this.state.freeSubmits+1,
                    facebookSubmit: 1
                })
            }
            resolve()
        })
    }
    submitAgain(){
        this.setState({
            errorMessage: 'Submitting...'
        })
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
                this.setState({
                    value: '',
                    freeSubmits: this.state.freeSubmits - 1,
                    errorMessage: 'Submitted Successfully!'
                })

        })

        } else {
            alert('unable to send your idea, please email tom@thefilmfund.co with your receipt and idea')
        }
    })
    }
    render() {


        const FacebookIcon = generateShareIcon('facebook')
        const TwitterIcon = generateShareIcon('twitter')
        const {
            FacebookShareButton,
            TwitterShareButton
        } = ShareButtons

        return (
            <div className="root">
            <Grid>
            <Row>
            <Col>
            <PanelGroup>
            <Panel header={<PageHeader>Thanks for entering. You will receive an email receipt shortly.</PageHeader>}>
    <PageHeader><small>Get free entries to submit additional sentences at no cost by sharing The Film Fund on Facebook and Twitter below. <br/> One share earns you an additional submission credit.</small></PageHeader>
        </Panel>
        <Panel header={<p>Share our page here! </p>}>
            <FacebookShareButton
                url={"http://thefilmfund.co/"}
                title={"Get up to $10,000 to make your short film by writing one sentence with The Film Fund"}
                className="centered-share"
                beforeOnClick={this.facebookShared.bind(this)}>
                <FacebookIcon
                    size={40}
                    round />
            </FacebookShareButton>
            <TwitterShareButton
                url={"http://thefilmfund.co/"}
                title={"Get up to $10,000 to make your short film by writing one sentence with The Film Fund"}
                className="centered-share"
                beforeOnClick={this.twitterShared.bind(this)}>
                <TwitterIcon
                    size={40}
                    round />
            </TwitterShareButton>
    <br/>
    <p>Your Idea</p>
        <FormGroup
            controlId="Idea"
            validationState={this.getValidationStateIdea()}
        >
            <FormControl
                type="textarea"
                value={this.state.value}
                placeholder="Enter your new idea here"
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
            <p>{this.state.errorMessage}</p>
            <Button onClick={this.submitAgain.bind(this)} disabled={this.state.freeSubmits > 0 ? false: true}> Click Here to Submit again <br/> You have {this.state.freeSubmits} free submissions left!</Button><br/><br/>
            <Button onClick={() => {this.context.router.push('home')}}>Return to the Home Screen</Button>

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