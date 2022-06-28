import React from 'react'

const ProjectSummary = ({project}) => {
	return (
		<div>
			<div className="card z-depth-0 project-summary center">
				<div className="card-content grey-text text-darken-3">
					<span className="card-title blue-text">{project.title}</span>
					<p>Posted by {project.authFirstName} {project.authLastName} </p>
					<p>{project.createdAt.toDate().toString().substring(0,15)}</p>
				</div>
			</div>
		</div>
	)
}

export default ProjectSummary