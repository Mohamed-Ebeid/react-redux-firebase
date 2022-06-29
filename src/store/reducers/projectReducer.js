const iniState={
	projects:[]
}

const projectReducer = (state = iniState, action) =>{
	switch (action.type){
		case 'CREATE':
			window.location.href = '/'
			return state;
		case 'CREATE_ERROR':
			console.log('created project error', action.err);
			return state;

		default:
			return state;
	}
	}

export default projectReducer