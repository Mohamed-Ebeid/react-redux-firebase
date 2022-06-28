import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Navigate } from 'react-router-dom'


const ProjectDetails = (props) => {
	const {project, auth} = props
	if(!auth.uid) return <Navigate to="/signin" />
	if(project){
		return (
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">{props.project.title}</span>
						<p>{props.project.body}</p>
					</div>
					<div className="card-content grey lighten-4 grey-text">
						<div>{props.project.authFirstName} {props.project.authLastName}</div>
						<div>{props.project.createdAt.toDate().toString().substring(0,25)}</div>
					</div>
				</div>
			</div>
	)
	}

	else{
		return(
			<div className="container center white">
				<p>Loading Data!</p>
			</div>
			)
	}

}

const mapStateToProps=(state, props)=>{
	console.log(state)
	const url = window.location.href.split('/')
	const projects= state.firestore.data.projects;
	const project= projects ? projects[url[4]] : null
	return{
		 project: project,
		 auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'projects' }])
	)(ProjectDetails)