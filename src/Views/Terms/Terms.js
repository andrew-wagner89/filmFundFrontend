/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, PanelGroup, Panel, PageHeader} from 'react-bootstrap'
import './Terms.css'

export class Terms extends React.Component {
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
                                <Panel header={<PageHeader>Entrant Contest Rules</PageHeader>}>
                                    <PageHeader><small>PURCHASE IS NOT NECESSARY TO ENTER. PURCHASE IS NECESSARY TO WIN. ALL FEDERAL, STATE, LOCAL, AND MUNICIPAL LAWS AND REGULATIONS APPLY.  VOID WHERE PROHIBITED.
                                    </small></PageHeader>
                                    <ol>
                                        <li>Contest
                                            <ul>
                                                <li>The Film Fund LLC is organizing a funding contest for short films (the “Contest”).</li>
                                                <li>Entrants write one simple sentence that conveys a unique concept for a short film and a creative way to utilize the funding/why they need the funding.</li>
                                                <li>The prize money is awarded to the best sentence by a panel of judges and will go toward the making and production of a short film.</li>
                                            </ul>
                                        </li>
                                        <li>Terms
                                            <ul>
                                                <li>By accessing the website at http://thefilmfund.co, each entrant agrees to be bound by these terms of service, all applicable laws and regulations, and agree to be responsible for compliance with any applicable local laws. If an entrant does not agree with any of these terms, the entrant is prohibited from using or accessing this site.  The materials contained on this website are protected by applicable copyright and trademark law.</li>
                                            </ul>
                                        </li>
                                        <li>Eligibility
                                            <ul>
                                                <li>The Contest is open to all writers and filmmakers at all levels who are at least eighteen years of age or older at the time of entry.</li>
                                                <li>Entrants from anywhere in the world are eligible; however, the material submitted must be in English.</li>
                                                <li>All material submitted to other competitions or contests are eligible.</li>
                                                <li>The material submitted must be a sentence of no more than 200 characters in length. </li>
                                                <li>There are no requirements as to when the material was written.</li>
                                                <li>Adaptations are ineligible unless the underlying rights are owned by the writer or the work is in the public domain.</li>
                                                <li>The material must not be encumbered by any obligation to, or option held by, a third party prior to entering the competition. </li>
                                                <li>If a script based on a submitted concept sentence or logline becomes optioned, produced, or purchased between the time of submission and the end of the Contest period, that entry will no longer be eligible. </li>
                                                <li>All immediate family members and household members of The Film Fund LLC are not eligible to enter the contest. </li>
                                                <li>The judges of the Contest are also exempt from entering the Contest.  </li> 
                                            </ul>
                                        <li>Rules
                                            <ul>
                                                <li>Submissions are accepted via electronic submission to the official Contest website (thefilmfund.co) during the Contest period.</li>
                                                <li>Submissions will be separated into two individual rounds.  Round 1 submissions require no entry fee, but will not be eligible to receive any cash prize. Round 2 submissions require an entry fee of $25 per submission and will be eligible to win a cash prize.</li>
                                                <li>There is no limit to the number of projects an entrant may submit. </li>
                                                <li>Submission fee payment must be made in full at time of submission for entries to be considered eligible.  All entry fees are non-refundable. </li>
                                                <li>All submitted material must be original, and all rights must be wholly owned by the writer(s).</li>
                                                <li>Material must be submitted by the writer. Material written by writing teams must be submitted by one of the writers, with consent of the other(s).</li>
                                                <li>If a writing team is chosen as a winner, prizes will be given to the person who submits the project.  Each team is responsible for dividing or sharing the prize money. </li>
                                                <li>All ownership and rights to the ideas submitted to this contest remains with the original rights holders.</li>
                                                <li>The winner(s) must include visible text in the film for at least 5 seconds either in opening or end credits that reads "In Association with The Film Fund. Learn more at thefilmfund.co.”</li>
                                                <li>To receive the prize money, the winner(s) must submit expenses to The Film Fund for reimbursement. Every expense incurred that goes toward the production of the short film must be documented. Expense reports must be emailed to the following address for reimbursement: tom@thefilmfund.co.</li>
                                                <li>BY SUBMITTING THE MATERIAL, THE APPLICANT HEREBY AGREES TO INDEMNIFY, HOLD HARMLESS AND DEFEND THE CONTEST, ITS EMPLOYEES, DIRECTORS, REPRESENTATIVES, AND AFFILIATES FROM ANY LIABILITY, CLAIMS, AND DAMAGES IN CONNECTION WITH THE SUBMISSION AND FROM ANY FEES AND EXPENSES, INCLUDING BUT NOT LIMITED TO REASONABLE ATTORNEY FEES THAT ANY OF THEM MAY INCUR IN CONNECTIONS THEREWITH.</li>
                                            </ul>
                                        <li>Agreement to Official Rules
                                            <ul>
                                                <li>Participation in the Contest constitutes each entrant’s full and unconditional agreement to and acceptance of these Official Rules and the decisions of the Organizer, which are final and binding.  Final prizes are contingent upon being compliant with these Official Rules and fulfilling all other requirements set forth herein. </li>
                                            </ul>
                                        </li>
                                        <li>Contest Period
                                            <ul>
                                                <li>The Contest begins on [TBD] at 8:00.00 AM Eastern Time and ends on [TBD] at 10:59.59 PM Eastern Time (referred to as the Contest Period). Entries submitted before or after the Contest Period will be disqualified.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>Prize Drawing
                                            <ul>
                                                <li>Winner(s) will be chosen by the judging panel, selected by The Film Fund LLC or its representatives.  The winner(s) will be chosen based on the following two factors:  (1) compelling premise and (2) creative utilization of funds.  Entrants may be required to submit further information to assist in the judges’ verification of eligibility.  Any entrant may be deemed ineligible at the sole discretion of The Film Fund LLC. The outcome of judging is at the sole discretion of the judges. 
                                                </li>
                                                <li>The winning prize will be dependent on the number of entrants in the Contest, but will not exceed $10,000.  Entrants will be notified via the official Contest website about the size of the prize prior to the end date of the Contest. 
                                                </li>
                                                <li>Winner(s) will be notified by email within 28 days after the Contest Period.  If the winner(s) cannot be contacted or do not claim the prize within 14 days of notification, the Organizer reserves the right to withdraw the prize from the winner(s) and pick a replacement winner.
                                                </li>
                                                <li>The Organizer will notify the winner when and where the prize can be collected. 
                                                </li>
                                                <li>The Organizer’s decision in respect of all matters to do with the competition will be final.
                                                </li>
                                                <li>The winner(s) agrees to the use of his/her name and image in any publicity material, as well as the entry.  Any personal data relating to the winner or any other entrants will be used solely in accordance with current United States data protection legislation and will not be disclosed to a third party without the entrant’s prior consent. 
                                                </li>
                                                <li>The winner’s name will be available 29 days after the Contest Period by emailing the following address: tom@thefilmfund.co.
                                                </li>
                                                <li>The Organizer is not responsible for inaccurate prize details supplied to any entrant by any third party connected with the Contest. 
                                                </li>
                                                <li>The Organizer will not fund an adult or otherwise illegal film.</li>
                                            </ul>

                                        <li>Rule Changes
                                            <ul>
                                                <li>The Organizer shall have the right, at its sole discretion and at any time, to change or modify these terms and conditions, such change shall be effective immediately upon posting to the official contest webpage: thefilmfund.co.
                                                </li>
                                                <li>Participants will be notified of changes by email within a reasonable time period after the changes have been completed. 
                                                </li>
                                            </ul>
                                        </li>
                                        <li>Copyright and Ownership
                                            <ul>
                                                <li>The Film Fund LLC or any partner, employee or agent associated with this contest claims no ownership nor first right of option to any original content submitted to this contest. All ownership and rights to the content submitted to this contest remains with the original rights holders until and unless other agreements are made.</li>
                                            </ul>
                                        </li>

                                        <li>Cancellation
                                            <ul>
                                                <li>The Organizer reserves the right to cancel the Contest at any time.</li>
                                                <li>The Organizer also reserves the right in its sole discretion to reject or disqualify any ineligible entries, without refund. </li>
                                            </ul>
                                        </li>

                                        <li>Disclaimer
                                            <ul>
                                                <li>The materials on The Film Fund's website are provided on an 'as is' basis.  The Film Fund makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
                                                <li>Further, The Film Fund does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                                                </li>
                                            </ul>
                                        </li>

                                        <li>Limitations
                                            <ul>
                                                <li>
                                                    In no event shall The Film Fund or its sponsors be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Film Fund's website, even if The Film Fund or a Film Fund authorized representative has been notified orally or in writing of the possibility of such damage.  Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to every entrant.
                                                </li>
                                            </ul>
                                        </li>

                                        <li>Accuracy of Content
                                            <ul>
                                                <li>The materials appearing on The Film Fund's website could include technical, typographical, or photographic errors. The Film Fund does not warrant that any of the materials on its website are accurate, complete or current. The Film Fund may make changes to the materials contained on its website at any time without notice. However The Film Fund does not make any commitment to update the materials.</li>
                                            </ul>
                                        </li>

                                        <li>Links
                                            <ul>
                                                <li>The Film Fund has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Film Fund of the site. Use of any such linked website is at the user's own risk.</li>
                                            </ul>
                                        </li>

                                        <li>Governing Law
                                            <ul>
                                                <li>The Contest is governed by and construed in accordance with the laws of Pennsylvania and each entrant irrevocably submits to the exclusive jurisdiction of the courts in Pennsylvania.</li>
                                            </ul>
                                        </li></li></li></li>
                                    </ol>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Terms
