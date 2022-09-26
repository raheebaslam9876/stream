import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignIn, SignOut } from '../actions'

export class GoogleAuth extends Component {
    state = { isSignedIn: null }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init(
                {
                    clientId: '597463166397-chi7pv6jupgiglkk7mmbjl8qsoai2d6p.apps.googleusercontent.com',
                    scope: 'email',
                    plugin_name: "streamy"
                }
            ).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.SignIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.SignOut();
        }
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return <div>I don't know if we are SignedIn</div>
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In with Google
                </button>
            )
        }
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}
const mapStatetoProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStatetoProps, { SignIn, SignOut })(GoogleAuth);