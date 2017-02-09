/**
 * Created by andrew on 2/4/17.
 */

import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, PanelGroup, Panel, PageHeader, ListGroup, ListGroupItem} from 'react-bootstrap'
import './Rules.css'

export class Rules extends React.Component {
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
                                <Panel header={<PageHeader>Official Rules</PageHeader>}>

                                    <ListGroup className="lg-left">
                                        <ListGroupItem>Rule 1: Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim.</ListGroupItem>
                                        <ListGroupItem>Rule 2: Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim.</ListGroupItem>
                                        <ListGroupItem>Rule 3: Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim.</ListGroupItem>
                                    </ListGroup>
                                    <p>Good luck!</p>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Rules

