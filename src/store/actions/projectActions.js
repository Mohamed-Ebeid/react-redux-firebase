export const createProject=(project)=>{
	return (dispatch, getState,{ getFirebase, getFirestore })=>{
		//calling the database (async call)
		const firestore=getFirestore();
		const profile = getState().firebase.profile;
		const authId = getState().firebase.auth.uid;
		firestore.collection('projects').add({
			...project,
			authFirstName: profile.firstName,
			authLastName: profile.lastName,
			authId: authId,
			createdAt: new Date()
		}).then(()=>{
			dispatch({ type:'CREATE', project})
		}).catch((err)=> {
			dispatch({ type:'CREATE_ERROR', err})
		}) 
		
	}
}