const iniState={
	authError: null
}

const authReducer = (state = iniState, action) =>{
	switch(action.type){
		case 'LOGIN_SUCCESS':
			console.log('You logged in successfully!')
			return{
				...state, authError: null
			}

		case 'LOGIN_FAILED':
			console.log('Login Failed')
			return{
				...state, authError: 'Failed'
			}

		case 'SIGNOUT':
			console.log('Signout successfully')
			return state

		case 'SIGNUP_SUCCSEE':
			console.log('Signup successfully')
			return{
				...state, authError: null
			}

		case 'SIGNUP_FAILED':
			console.log('Signup Failed')
			return{
				...state, authError: action.err.message
			}


		default:
			return state;
	}
}

export default authReducer