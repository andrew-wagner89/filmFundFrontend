/**
 * Created by andrew on 2/4/17.
 */
/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, PanelGroup, Panel, PageHeader} from 'react-bootstrap'
import woman from '../../Images/woman.jpg'
import man from '../../Images/male.jpeg'
import './Judges.css'

export class Judges extends React.Component {
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
                                    <Grid>
                                        <Row>
                                            <Col xs={12} md={6} lg={3}>
                                                <img src={woman} alt="" className="logo" onClick={this.land.bind(this)}></img>
                                                <p>Judge 1 bio</p>
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <img src={man} alt="" className="logo" onClick={this.land.bind(this)}></img>
                                                <p>Judge 2 bio</p>
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <img src={man} alt="" className="logo" onClick={this.land.bind(this)}></img>
                                                <p>Judge 3 bio</p>
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <img src={woman} alt="" className="logo" onClick={this.land.bind(this)}></img>
                                                <p>Judge 4 bio</p>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Judges

