/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, PanelGroup, Panel, PageHeader, Image} from 'react-bootstrap'
import './PastWinners.css'
// Change this line to change an image
import Americano from '../../Images/Americano.jpg'

export class PastWinners extends React.Component {
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
                                <Panel className="black" header={<PageHeader>Past Winners</PageHeader>}>
                                    <Image className="film" alt="test" src={Americano}/>
                                    <p> Above still from "AMERICANO" directed by Tim Viola, the Spring 2017 winner of The Film Fund. Watch the trailer <a href = "https://vimeo.com/246031928" target="_blank">here</a>.</p>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default PastWinners
