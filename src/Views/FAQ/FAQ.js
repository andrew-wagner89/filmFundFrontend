/**
 * Created by andrew on 2/4/17.
 */
/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, PanelGroup, Panel, PageHeader, ListGroup, ListGroupItem} from 'react-bootstrap'
import './FAQ.css'

export class FAQ extends React.Component {
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
                                <Panel header={<PageHeader>Frequently Asked Questions</PageHeader>}>
                                    <ListGroup className="lg-left">
                                        <ListGroupItem header="Why male models?">Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim.</ListGroupItem>
                                        <ListGroupItem header="Can i have the money now?"> Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim.</ListGroupItem>
                                        <ListGroupItem header="What if i say please how bout dat?">Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim.</ListGroupItem>
                                    </ListGroup>
                                    <p>Question not answered here? Please contact us!</p>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default FAQ

