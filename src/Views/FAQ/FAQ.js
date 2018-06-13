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
            <div className="root" fluid>
                <Grid>
                    <Row>
                        <Col>
                            <PanelGroup>
                                <Panel header={<PageHeader>Frequently Asked Questions</PageHeader>}>
                                    <ListGroup className="lg-left black" >
                                        <ListGroupItem header="Do I keep the rights to my short film if I win?">Yes, you retain all rights.</ListGroupItem>
                                        <ListGroupItem header="Can I enter a sentence idea for my film that's already in production but needs post work?">Yes. We want to make films happen.</ListGroupItem>
                                        <ListGroupItem header="Can I enter a sentence idea for a web series?">Yes. A short film could serve as the pilot episode, right?</ListGroupItem>
                                        <ListGroupItem header="How do I receive the funding?">To maintain accountability, The Film Fund will reimburse individual expenses for your film after receiving expense reports, receipts, invoices, etc.</ListGroupItem>
                                        <ListGroupItem header="Where does the money come from?">Filmmakers like you who have also submitted their sentence to The Film Fund.</ListGroupItem>
                                        <ListGroupItem header="Why are you doing this?">We want to see films get financed in a new way because we know it's possible to get around industry gatekeepers.</ListGroupItem>
                                        <ListGroupItem header="What kind of genres are you looking for?">Anything that has the potential to carry a good story. Horror, comedy, drama, anything. Absolutely no adult films under any circumstance.</ListGroupItem>
                                        <ListGroupItem header="Who are the judges?">Check them out <a href="#team">here</a> </ListGroupItem>
                                        <ListGroupItem header="Can I submit the finished film to film festivals?">Of course.</ListGroupItem>
                                        <ListGroupItem header="I have no idea what I'm doing. Will you help me with budgeting?">Budgets will be different for each film, but we'd be more than happy to share some sample short film budgets with you upon request. They're pretty easy to put together.</ListGroupItem>
                                        <ListGroupItem header="Do I need to give credit to The Film Fund?">Yes, and we'll be honored. Include visible text in your film for at least 5 seconds (either in opening or end credits) that reads "In Association with The Film Fund. Learn more at thefilmfund.co."</ListGroupItem>
                                    </ListGroup>
                                    <p>Question not answered here? Please contact us at tom@thefilmfund.co!</p>
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

