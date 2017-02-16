/**
 * Created by andrew on 2/4/17.
 */
/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, Panel, PageHeader} from 'react-bootstrap'
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
                                <Panel header={<PageHeader>Meet the Judges</PageHeader>}>
                                            <Col xs={12} md={6} lg={3}>
                                                <Panel>
                                                    <img src={man} alt="" className="logo"></img>
                                                    <p>Judge 1 bio</p>
                                                </Panel>
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <Panel>
                                                    <img src={woman} alt="" className="logo"></img>
                                                    <p>Judge 2 bio</p>
                                                </Panel>
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <Panel>
                                                    <img src={woman} alt="" className="logo"></img>
                                                    <p>Judge 3 bio</p>
                                                </Panel>
                                            </Col>
                                            <Col xs={12} md={6} lg={3}>
                                                <Panel>
                                                    <img src={man} alt="" className="logo"></img>
                                                    <p>Judge 4 bio</p>
                                                </Panel>
                                            </Col>
                                </Panel>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Judges

