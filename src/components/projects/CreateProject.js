import React from 'react'
import { connect } from 'react-redux'
import  { createProject } from '../../store/actions/projectActions'
import { Navigate } from 'react-router-dom'


class CreateProject extends React.Component {

	state={
		title:'',
		body:''
	}

	handleChange = (e) =>
	{this.setState({[e.target.id]: e.target.value})

	}

	handleSubmit = (e) =>
	{		
		e.preventDefault();
		this.props.createProject(this.state)
		// setTimeout(()=>{window.location.href = '/'}, 1000)
	}

	render() {
		if(!this.props.auth.uid) return <Navigate to='/signin'/>
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="silver">
					<h5 className="grey-text text-darken-3">Create a new project:</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="body">Body</label>
						<textarea id="body" className="materialize-textarea" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<button className="btn green lighten-1 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		createProject: (project)=> dispatch(createProject(project))
	}
}

const mapStateToProps =(state)=>{
	return{
		auth: state.firebase.auth,

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)