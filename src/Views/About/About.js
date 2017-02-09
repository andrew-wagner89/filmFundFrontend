/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {} from 'react-bootstrap'
import './About.css'

export class About extends React.Component {
    static contextTypes = {
        router: T.object,
    }

    render() {

        return (
            <div className="root">
                <h1>About</h1>

            </div>
        )
    }
}
export default About
