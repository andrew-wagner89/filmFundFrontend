/**
 * Created by andrew on 2/5/17.
 */
import React, { PropTypes as T } from 'react'
import {PageHeader, Panel, PanelGroup, Row, Grid, Button} from 'react-bootstrap'
import './ClosedSubmission.css'

export class ClosedSubmission extends React.Component {
    static contextTypes = {
        router: T.object,
    }

    constructor(props, context) {
        super(props, context)
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
                                        The entries have closed. Stay tuned to your email for updates.
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
export default ClosedSubmission