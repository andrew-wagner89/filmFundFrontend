/**
 * Created by andrew on 2/4/17.
 */
import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import MainPage from './MainPage/MainPage'
import Container from './Container'
import About from './About/About'
import SecondSubmission from './SecondSubmission/SecondSubmission'

export const makeRoutes = () => {
    return (
        <Route path="/" component={Container}>
            <IndexRedirect to="/home" />
            <Route path="/home" component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/secondsubmission" component={SecondSubmission} />
        </Route>
    )
}

export default makeRoutes