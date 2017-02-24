/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, FormGroup, HelpBlock,FormControl, Button, Image} from 'react-bootstrap'
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
                <PanelGroup >
                    <Image className="centered" src={logobig}/>
                    <Panel className="black" header={<PageHeader>Get up to $10,000 to make your short film by writing one sentence.</PageHeader>}>
                        <h1 className="black"><small>
                            <h1> Why The Film Fund?</h1><br/>
                            We're funding up to $10,000 in a way that's a lot simpler than screenwriting contests, crowdfunding, or applying to grants, because I'm sick of seeing these contests dominated by industry experts (i.e. Zach Braff raising 3+ million on Kickstarter).<br/><br/>
                            Because of that, our funding process is designed to level the funding field and not give advantages to anyone. You simply <a href="#examples">write one sentence</a> conveying your short film concept, and a panel of judges will pick the best sentence. Sentences will be judged on two factors: 1) a compelling premise and 2) creative utilization of funds<br/><br/>
                            Enter a sample sentence to Round 1 now to see how simple the process really is.
                        </small></h1>
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

                    </Panel>

                </PanelGroup>
            </div>
        )
    }
}
export default MainPage