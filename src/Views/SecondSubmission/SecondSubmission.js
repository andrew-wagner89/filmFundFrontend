/**
 * Created by andrew on 2/5/17.
 */
import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, Row, Grid, Button} from 'react-bootstrap'
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
    returnToMain(){
        sessionStorage.setItem('returnedFromSubmit', 'true')
        this.context.router.push('/home')
    }

    render() {

        return (
            <div className="root">
                <Grid>
                    <Row>
                            <PanelGroup>
                                <Panel header={<PageHeader>Welcome to the Film Fund</PageHeader>}>
                                    <PageHeader><small>
                                        The Spring 2017 entries have closed. Stay tuned to your email for updates.
                                        <br/><br/>

                                    </small></PageHeader>
                                    <Button bsStyle="primary" onClick={this.returnToMain.bind(this)}>
                                        Click here to return to the main page
                                    </Button>
                                </Panel>
                            </PanelGroup>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default SecondSubmission