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
                                <Panel className="black" header={<PageHeader>About the Film Fund</PageHeader>}>
                                    <PageHeader><small>
                                        The Film Fund is an alternative to film industry funding platforms such as screenwriting, time-intensive grant applications, and crowdfunding campaigns via websites such as such as Kickstarter, Indiegogo, or Seed & Spark. We want to level the funding field and take the skewed advantages out of independent film.
                                        <br/>
                                        See our FAQ <a href="#faq">here</a>
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
export default About
