import React from 'react';
import {Link} from 'react-router-dom';
import SigninLinks from './SignedinLinks';
import SignOutLinks from './SignOutLinks';
import {connect} from 'react-redux'

const Navbar = (props) => {
	const{auth,profile}= props
	const links = auth.uid ?  <SigninLinks profile={profile}/> : <SignOutLinks/>
	return (
		<nav className="nav-wrapper grey darken-2" >
			<div className="container">
				<Link to='/' className="brand-logo left">Dashboard</Link>
				{links}
			</div>
		</nav >
	)
}

const mapStateToProps=(state)=>{
	return{
		auth: state.firebase.auth,
		profile: state.firebase.profile

	}
}

export default connect(mapStateToProps)(Navbar)