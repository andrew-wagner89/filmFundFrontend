import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, Col, Row, Grid, FormGroup, HelpBlock,FormControl, Button} from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../Images/facebook_logo.png'
import stripeLogo from '../../Images/powered_by_stripe.png'
import './OpenSubmission.css'

export class OpenSubmission extends React.Component {
    static contextTypes = {
        router: T.object,
    }

    constructor(props, context) {
        super(props, context)

        this.state = {
            value: localStorage.getItem('idea'),
            name: '',
            email: '',
            errorMessage: ""
        }

        if(!this.state.value && false){
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
    submitIdea(token){
        const webTaskData = new FormData()
        webTaskData.append('stripeToken', token.id)
        console.log(JSON.stringify(token.id))
        fetch('https://wt-5ff77dc3c93e8fcd7c00c61fe5c491f2-0.run.webtask.io/stripecharge?stripeToken=' + token.id + '&email=' + this.state.email,{
            method: 'GET',
        }).then(res => {
            if (res.ok) {
                res.text().then(text => {
                    console.log(text)
                    const dataToSend = new FormData();
                    dataToSend.append('Email', this.state.email)
                    dataToSend.append('Idea', this.state.value)
                    dataToSend.append('Submitter', this.state.name)
                    dataToSend.append('Token', JSON.stringify(token))
                    fetch('https://script.google.com/macros/s/AKfycbz9fDIv7bhBWb8nTWrkg4-cKjIQ3oG9t0BgbLGnZQOorxR52UOd/exec',
                        {
                            method: 'POST',
                            body: dataToSend
                        }
                    ).then((res) => {
                        if (res.ok)
                        {
                            res.json().then(res1 => {
                                localStorage.setItem('idea', this.state.value)
                                localStorage.setItem('name', this.state.name)
                                localStorage.setItem('email', this.state.email)
                                this.context.router.push('part2submit')
                            })

                        } else {
                            alert('unable to send your idea, please email filmfund@gmail.com with your receipt and idea')
                        }
                    })
                })

            } else {
                alert('unable to contact Stripe, please try again later')
                res.text().then(text => {
                    console.log(text)
                })
            }
        })

    }
    render() {

        return (
            <div className="root">
                <Grid>
                    <Row>
                            <PanelGroup>
                                <Panel className="black" header={<PageHeader>Get up to $10,000 to make your short film by writing one sentence.</PageHeader>}>
                                    <Col xs={12} md={10} mdOffset={1}>
                                    <h1 className="question">How Do I Enter?</h1>
                                        <h1><small>Craft and submit one sentence with a compelling premise that also conveys why you need this funding to achieve your vision. Our judges will pick the best one. To see how easy it is, the first round is free to enter. Then you and your brilliant sentence can choose to pay $25 to enter the second round for a chance to win up to $10,000. See examples <a href="#examples">here</a>, and enter below.<br/><br/>
                                        Sentences judged on:<br/>
                                        1) Compelling Premise<br/>
                                        2) Creative Utilization of Funds</small></h1>
                                    </Col>
                                </Panel>
                                <Panel>
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
                <Col xs={12} sm={4} smOffset={4}>
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
                                    <StripeCheckout
                                        name="The Film Fund"
                                        description="Pay $25 for the chance to win"
                                        image={logo}
                                        ComponentClass="div"
                                        panelLabel="Pay with Credit Card"
                                        amount={2500}
                                        currency="USD"
                                        stripeKey="pk_live_XkhEgLXdc6Vruep49wl4Hw8M"
                                        email={this.state.email}
                                        billingAddress
                                        allowRememberMe={false}
                                        // Note: enabling both zipCode checks and billing or shipping address will
                                        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
                                        zipCode={false}
                                        token={this.submitIdea.bind(this)}>
                                        <Button className="btn btn-primary">
                                            Pay with Credit Card
                                        </Button>
                                        </StripeCheckout><br/>
                                        <p>By entering the contest, you agree to the Official Rules and Terms of Service.</p>
                    <img src={stripeLogo}/>
                                    <p>{this.state.errorMessage}</p>
                                </Col>
                                </Panel>
                            </PanelGroup>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default OpenSubmission