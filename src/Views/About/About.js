/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, PanelGroup, Panel, PageHeader} from 'react-bootstrap'
import './About.css'

export class About extends React.Component {
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
                                <Panel header={<PageHeader>About the Film Fund</PageHeader>}>
                                    <PageHeader><small>Info about the film fund here Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim. Mei modo vocibus ea. Quo eu summo legere. Vix at solet interesset, no deserunt iracundia scripserit per. Sit eu nominavi molestie convenire. Ad eam veritus referrentur, deleniti gloriatur definiebas et pro.</small></PageHeader>
                                </Panel>
                                <Panel>
                                    <PageHeader><small>Info about the film fund here Lorem ipsum dolor sit amet, te sint dictas docendi mea, suas iudico et mei. Odio euripidis at eam, ad mea minim vitae possim. Mei modo vocibus ea. Quo eu summo legere. Vix at solet interesset, no deserunt iracundia scripserit per. Sit eu nominavi molestie convenire. Ad eam veritus referrentur, deleniti gloriatur definiebas et pro.</small></PageHeader>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default About
