/**
 * Created by andrew on 2/9/17.
 */
import React from 'react'
import './NotFound.css'

export class NotFound extends React.Component {
    render() {
        return (
            <div className="root">
                Oops! Looks like you've reached a page that doesn't exist 😥
            </div>
        )
    }
}

export default NotFound