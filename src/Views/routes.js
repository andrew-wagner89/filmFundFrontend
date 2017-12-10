/**
 * Created by andrew on 2/4/17.
 */
import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import MainPage from './MainPage/MainPage'
import Container from './Container'
import About from './About/About'
import ClosedSubmission from './ClosedSubmission/ClosedSubmission'
import OpenSubmission from './OpenSubmission/OpenSubmission'
import Examples from './Examples/Examples'
import FAQ from './FAQ/FAQ'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'
import Terms from './Terms/Terms'
import Judges from './Judges/Judges'
import PastWinners from './PastWinners/PastWinners'
import CompleteSubmission from './CompleteSubmission/CompleteSubmission'
export const makeRoutes = () => {
    return (
        <Route path="/" component={Container}>
            <IndexRedirect to="/home" />
            <Route path="home" component={MainPage} />
            <Route path="about" component={About} />
            <Route path="submission" component={OpenSubmission} /> //Change this to ClosedSubmission to close it
            <Route path="examples" component={Examples} />
            <Route path="faq" component={FAQ} />
            <Route path="contact" component={Contact} />
            <Route path="terms" component={Terms} />
            <Route path="team" component={Judges} />
            <Route path='pastwinners' component={PastWinners} />
            <Route path='completesubmission' component={CompleteSubmission} />
            <Route path="*" component={NotFound} />
        </Route>
    )
}

export default makeRoutes