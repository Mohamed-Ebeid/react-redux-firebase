export const signIn =(cred) =>{
	return(dispatch, getState, {getFirebase}) => {
		
		const firebase= getFirebase()

		firebase.auth().signInWithEmailAndPassword(
			cred.email,
			cred.password
			).then(()=>{
				dispatch({type:'LOGIN_SUCCESS'})
			}).catch((err) =>{
				dispatch({type:'LOGIN_FAILED', err})
			})
	}
}

export const signOut =()=>{
	return(dispatch, getState, {getFirebase}) =>{
		const firebase=getFirebase()

		firebase.auth().signOut().then(()=>{
			dispatch({type: 'SIGNOUT'})
		})
	}
}

export const signUp=(newUser)=>{
	return(dispatch, getState,{ getFirebase, getFirestore}) =>{
		const firebase=getFirebase();
		const firestore=getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
			).then((resp)=>{
				return firestore.collection('users').doc(resp.user.uid).set({
					firstName: newUser.firstName,
					lastName: newUser.lastName,
					intials: newUser.firstName[0] + newUser.lastName[0]
				})
			}).then(()=>{
				dispatch({type: 'SIGNUP_SUCCSEE'})
			}).catch(err =>{
				dispatch({type: 'SIGNUP_FAILED', err})
			})
	}
}