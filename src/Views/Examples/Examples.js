/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, PanelGroup, Panel, PageHeader, ListGroup, ListGroupItem} from 'react-bootstrap'
import './Examples.css'

export class Examples extends React.Component {
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
                                <Panel className="black"header={<PageHeader>Examples</PageHeader>}>
                                    <h1><small>
                                        Sentences will be judged on the following two factors:
                                        <br/>
                                        1) a compelling premise<br/>
                                        2) creative utilization of funds
                                    </small></h1>
                                    <br/><br/>
                                    <ListGroup className="lg-left">
                                        <ListGroupItem>
                                            <h4>A woman is haunted by a misunderstood psychological condition where she struggles to find joy in even the happiest of situations, and I need the funding largely for special effects and a helicopter.</h4>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <br/>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <h4>When killer crabs attack a small-town hotdog bun factory, only one man can stop all hell from breaking loose, and most of our funding will go to professional crab-wranglers.</h4>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Examples

