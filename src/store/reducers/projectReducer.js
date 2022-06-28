const iniState={
	projects:[
		// {id:'1', title:'This is title 01', content:'This body number 01'},
		// {id:'2', title:'This is title 02', content:'This body number 02'},
		// {id:'3', title:'This is title 03', content:'This body number 03'},
		// {id:'4', title:'This is title 04', content:'This body number 03'},
	]
}

const projectReducer = (state = iniState, action) =>{
	switch (action.type){
		case 'CREATE':
			console.log('created project', action.project);
			return state;
		case 'CREATE_ERROR':
			console.log('created project error', action.err);
			return state;

		default:
			return state;
	}
	}

export default projectReducer