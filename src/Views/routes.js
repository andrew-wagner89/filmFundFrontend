/**
 * Created by andrew on 2/4/17.
 */
import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import MainPage from './MainPage/MainPage'
import Container from './Container'
import About from './About/About'
import SecondSubmission from './SecondSubmission/SecondSubmission'
import Examples from './Examples/Examples'
import FAQ from './FAQ/FAQ'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'
import Rules from './Rules/Rules'
import Terms from './Terms/Terms'
export const makeRoutes = () => {
    return (
        <Route path="/" component={Container}>
            <IndexRedirect to="/home" />
            <Route path="home" component={MainPage} />
            <Route path="about" component={About} />
            <Route path="secondsubmission" component={SecondSubmission} />
            <Route path="examples" component={Examples} />
            <Route path="faq" component={FAQ} />
            <Route path="contact" component={Contact} />
            <Route path="rules" component={Rules} />
            <Route path="terms" component={Terms} />
            <Route path="*" component={NotFound} />
        </Route>
    )
}

export default makeRoutes