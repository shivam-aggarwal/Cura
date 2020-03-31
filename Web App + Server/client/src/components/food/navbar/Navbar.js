import React, {Component} from 'react';
import './Navbar.css';
import {Route, Link} from 'react-router-dom';

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav id="dash" className="navbar navbar-expand-lg navbar-cust">
                    <a className="navbar-brand" href="#">Cura</a>
  					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    					<span className="navbar-toggler-icon"></span>
  					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ml-auto">
							<a className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
							<a className="nav-item nav-link" href="#">Profile</a>
							<a className="nav-item nav-link" href="#">Logout</a>
						</div>
					</div>
				</nav>
            </div>
        );
    }
}

export default Navbar;