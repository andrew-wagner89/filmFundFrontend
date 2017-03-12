/**
 * Created by andrew on 2/4/17.
 */
/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, Panel, PageHeader, Clearfix} from 'react-bootstrap'
import avi from '../../Images/Avi_Setton.jpg'
import dawn from '../../Images/Dawn_Keetley.jpg'
import eli from '../../Images/Eli_Hess.jpg'
import tom from '../../Images/Thomas_Verdi.jpg'
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
                                    <h1><small>Our judges represent the most creative and analytical people on this planet,<br/> and they have the experience to back it up.<br/> Check out their stories below.</small></h1>
                                            <Col xs={12} sm={6} lg={3}>
                                                <Panel className="grnborder">
                                                    <img src={avi} alt="" className="judge-img"></img>
                                                    <h3>Avi Setton</h3>
                                                    <p>Avi Setton received a B.F.A. in Film & Television Production at New York University’s Tisch School of the Arts with a minor in Philosophy, and an M.A. in English at Lehigh University. Avi's experience is wide-ranging: he taught documentary filmmaking to graduate students at Lehigh, taught screenwriting at SOCAPA, worked as a story logger on a reality TV show, worked as an editor, script supervisor, and assistant cameraman on films, TV shows, and commercials, among other freelance industry jobs. Avi currently works in Mixed Reality and Virtual Reality.</p>
                                                </Panel>
                                            </Col>
                                            <Col xs={12} sm={6} lg={3}>
                                                <Panel className="grnborder">
                                                    <img src={dawn} alt="" className="judge-img"></img>
                                                    <h3>Dawn Keetley</h3>
                                                    <p>Dawn Keetley is Professor of English at Lehigh University where she teaches horror /gothic literature, film, and television. She has most recently published in the Journal of the Fantastic in the Arts, the Journal of Popular Television, the Journal of Film and Video, and Gothic Studies. She has edited a collection of essays on The Walking Dead and co-edited another on plant horror in fiction and film. She writes regularly for a horror website she co-founded at <a href="http://www.horrorhomeroom.com">Horror Homeroom.</a></p>
                                                </Panel>
                                            </Col>
                                            <Clearfix visibleSmBlock visibleMdBlock></Clearfix>
                                            <Col xs={12} sm={6} lg={3}>
                                                <Panel className="grnborder">
                                                    <img src={eli} alt="" className="judge-img"></img>
                                                    <h3>Eli Hess</h3>
                                                    <p>With a degree in architecture from Lehigh University, Eli Hess works as a digital designer and fabricator of furniture, sculpture, and public art for Hess Industries, LLC. in Baltimore, Maryland. The group responds to public calls for artists to design and build monumental, interactive sculpture for public spaces, including airports, public universities and municipalities. Hess has also been featured in galleries in Baltimore and Allentown, Pennsylvania, and works as an artist in residence at Saint James Academy in Sparks, Maryland.</p>
                                                </Panel>
                                            </Col>
                                            <Col xs={12} sm={6} lg={3}>
                                                <Panel className="grnborder">
                                                    <img src={tom} alt="" className="judge-img"></img>
                                                    <h3>Thomas Verdi</h3>
                                                    <p>As Founder and CEO of The Film Fund, Thomas Verdi is a dynamic creative who wants to help indie filmmakers with their projects. Finishing up a BA in English, a concentration in creative writing, an entrepreneurship minor, and a film studies minor at Lehigh University, he looks forward to focusing on the synergy between creativity and innovation in his future pursuits. He has been writing and directing films since childhood, and his short script “Son of Blackbeard,” currently in pre-production, was named a semi-finalist in HollyShorts Film Festival’s Screenplay Contest. Thomas also works as a freelance content writer for several prominent startup companies such as Flip.</p>
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

