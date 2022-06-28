import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import{ signUp } from '../../store/actions/authActions'

class Signup extends React.Component {
	state={
		firstName:'',
		lastName:'',
		email:'',
		password:''
	}
	handleChange = (e) =>
	{this.setState({[e.target.id]: e.target.value})}

	handleSubmit = (e) =>
	{
		e.preventDefault();
		this.props.SignUp(this.state)
	}

	render() {
		if(this.props.auth.uid) return <Navigate to="/"/>
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="silver">
					<h5 className="grey-text text-darken-3">Sign in</h5>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<button className="btn green lighten-1 z-depth-0">Sign-Up</button>
					</div>

					<div className="purple-text center">
						{this.props.authError ? <p>{this.props.authError}</p>: null}
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps=(state) =>{
	return{
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		SignUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)