/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, PanelGroup, Panel, PageHeader} from 'react-bootstrap'
import './CompleteSubmission.css'

export class CompleteSubmission extends React.Component {
    static contextTypes = {
        router: T.object,
    }

    render() {

        return (
            <div className="root">
                <Grid>
                    <Row>
                        <Col>
                            <PanelGroup>
                                <Panel className="black" header={<PageHeader>Thanks for your submission!</PageHeader>}>
                                    <PageHeader><small>
                                        We've sent you an email receipt.
                                        <br/>
                                        Return home <a href="#home">here</a>
                                    </small></PageHeader>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default CompleteSubmission
