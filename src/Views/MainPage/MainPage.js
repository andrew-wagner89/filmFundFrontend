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
        this.context.router.push('submission');
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
                        <Button bsStyle="primary" onClick={this.submitIdea.bind(this)}>
                            Submit your idea
                        </Button>
                        </Col>
                    </Panel>
                </PanelGroup>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default MainPage