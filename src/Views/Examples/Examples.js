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
                                <Panel header={<PageHeader>Examples</PageHeader>}>
                                    <p>some info about what you're looking for?</p>
                                    <ListGroup className="lg-left">
                                        <ListGroupItem>Example 1: Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim.</ListGroupItem>
                                        <ListGroupItem>Example 2: Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim.</ListGroupItem>
                                        <ListGroupItem>Example 3: Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim.</ListGroupItem>
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

