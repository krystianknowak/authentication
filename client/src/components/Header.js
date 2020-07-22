import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderStyle.css";

const Header = (props) => {

    const renderLinks = () => {
        if (props.authenticated) {
            return (
                <div>
                    <Link to="/signout">sign Out</Link>
                    <Link to="/feature">Feature</Link>
                </div>
            )
        }
        return (
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        )
    }

    return (
        <div className="header">
            <Link to="/">Redux auth</Link>
            {renderLinks()}
        </div>
    )
}


function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);