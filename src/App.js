import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/Signin'
import SignUp from './components/auth/Signup'
import CreateProject from './components/projects/CreateProject'


class App extends Component {

  render(){

     
    return (
      <BrowserRouter>

        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={ <Dashboard /> } />
                <Route path='/project/:id' element={<ProjectDetails/>} />
                <Route path='/signin' element={ <SignIn /> } />
                <Route path='/signup' element={ <SignUp /> } />
                <Route path='/create' element={ <CreateProject /> } />
            </Routes>
        </div>

      </BrowserRouter>
      

  );
  
  
}
  }


   

export default App;
