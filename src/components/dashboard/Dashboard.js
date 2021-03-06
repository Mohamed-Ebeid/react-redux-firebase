import React, {Component} from 'react'
// import Notifcations from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect  } from 'react-redux-firebase'
import { compose } from 'redux'
import { Navigate } from 'react-router-dom'

 class Dashboard extends Component {
	render() {
		console.warn = () => {}
		const { projects, auth } = this.props;
		if(!auth.uid) return <Navigate to='/signin' />

		return (
			<div className="dashboard container">
				<div className="center">
					<div className="col s12 m6 " >
						<ProjectList projects={projects}/>
					</div>

{/*					<div className="col s12 m5 offset-m1">
						<Notifcations />
					</div>*/}
				</div>				
			</div>
		)
	}
}

const mapStateToProps=(state) =>{
	return{
		// projects: state.project.projects //the 2nd (projects) id 
		//coming from the reducer and the 1st is used to acces it.
		//any time the store is updated, mapStateToProps will be called.
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth
		
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{collection:'projects', orderBy: ['createdAt', 'desc']}])
	)(Dashboard)
	