/**
 * Created by andrew on 2/5/17.
 */
import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, Col, Row, Grid, FormGroup, HelpBlock,FormControl} from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../Images/facebook_logo.png'
import './SecondSubmission.css'

export class SecondSubmission extends React.Component {
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

        if(!this.state.value){
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

        const dataToSend = new FormData();
        dataToSend.append('Email', this.state.email)
        dataToSend.append('Idea', this.state.value)
        dataToSend.append('Submitter', this.state.name)
        dataToSend.append('Token', JSON.stringify(token))
        for (var pair of dataToSend.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
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
                this.context.router.push('part2submit')
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
                                    <PageHeader><small>Thanks for submitting your idea! <br/>If you want a shot at the funding, pay up!</small></PageHeader>
                                </Panel>
                                <Panel header={<p>Enter round 2 here! </p>}>
                                    <p>Your Idea</p>
            <form id='submitter'>
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
            </form>
                                    <p>Credit Card payment is verified and secured by Stripe</p>
                                    <StripeCheckout
                                        name="The Film Fund"
                                        description="Pay $20 for the chance to win "
                                        image={logo}
                                        ComponentClass="div"
                                        panelLabel="Pay"
                                        amount={2000}
                                        currency="USD"
                                        stripeKey="pk_test_o6Bwq8xknOQT69Kl7toA7v2H"
                                        email={this.state.email}
                                        billingAddress
                                        allowRememberMe={false}
                                        // Note: enabling both zipCode checks and billing or shipping address will
                                        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
                                        zipCode={false}
                                        token={this.submitIdea.bind(this)}>
                                        </StripeCheckout>

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