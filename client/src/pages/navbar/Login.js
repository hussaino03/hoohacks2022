import React,  { useState }  from 'react';
import './about.css';


const Login = () =>  {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    
    
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
      };

    return (
        <div>
              <header className='masthead'>
    <h1 className='masthead-heading'>GrowWithMe</h1>
  </header>
  <div class="row py-5 d-flex align-items-center justify-content-center">
          <h1 class="text-center fs-2">Welcome Back!</h1>
          </div>
        <div class="row justify-content-center">
        <div class="col-4">
        <form action="#" method="post">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" required/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password"/>
            </div>
            <div class="text-center">
            <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
        </div>
    </div>
    </div>
    );
}

export default Login;