/**
 * Created by andrew on 2/4/17.
 */
import React, { PropTypes as T } from 'react'
import {Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from '../Images/facebook_logo.png'
import {StyleSheet, Image} from 'react-native'
import background from '../Images/photo-1455472467710-3b204ed59394.jpg'
import './Container.css'

export class Container extends React.Component {
    static contextTypes = {
        router: T.object
    }

    constructor(props, context) {
        super(props, context)

        this.state = {
        }
    }

    land() {
        this.context.router.push('/home')
    }

    render() {
        let children = null
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
            })
        }
        const styles = StyleSheet.create({
            backgroundImage: {
                flex: -1,
                width: '100%',
                height: '100%',
                resizeMode: 'stretch'
            }
        });

        return (
            <Image source={background} style={styles.backgroundImage}>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img src={logo} alt="" className="logo" onClick={this.land.bind(this)}></img>
                        </Navbar.Brand>
                        <Navbar.Text>
                            <span className="title" onClick={this.land.bind(this)}>The Film Fund</span>
                        </Navbar.Text>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={8} href="#home">Home</NavItem>
                            <NavItem eventKey={1} href="#about">About</NavItem>
                            <NavItem eventKey={2} href="#examples">Examples</NavItem>
                            <NavItem eventKey={3} href="#faq">FAQ</NavItem>
                            <NavItem eventKey={4} href="#contact">Contact Us</NavItem>
                            <NavItem eventKey={5} href="#rulesterms">Official Rules and Terms</NavItem>
                            <NavItem eventKey={7} href="#team">The Team</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {children}
            </Image>
        )
    }
}

export default Container