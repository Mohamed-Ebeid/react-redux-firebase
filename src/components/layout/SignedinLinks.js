import React from 'react';
import {NavLink} from 'react-router-dom'
import {signOut} from'../../store/actions/authActions'
import {connect} from 'react-redux'

const SignedinLinks = (props) => {
  return (
    <ul className="right">
    	<li><NavLink to='/create'>New project</NavLink></li>
    	<li><a href="/#" onClick={props.signOut}>Logout</a></li>
    	<li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.intials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch)=>{
  return{
      signOut: () =>dispatch(signOut()) 
  }
}

export default connect(null, mapDispatchToProps)(SignedinLinks);