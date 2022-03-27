import React,  { useState }  from 'react';



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
        
        <div class="row py-5 d-flex align-items-center justify-content-center">
          <h1 class="text-center fs-2">Sign up for GrowWithMe</h1>
  
          <div class="py-5 d-flex align-items-center justify-content-center">
            <form method="post">

              <div class="form-outline mb-4">
                <label class="form-label" for="email">Your email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control form-control-lg"
                />
              </div>
  

              <div class="form-outline mb-4">
 
                <label class="form-label" for="password">Create a password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                  class="form-control form-control-lg"
                />
              </div>
  
              <div class="form-outline mb-4">

                <label class="form-label" for="password_check">Confirm your password</label>
                <input
                  type="password"
                  name="password"
                  id="password_check"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                  class="form-control form-control-lg"
                />
              </div>
  
              <p class="text-center text-muted mt-5 mb-3">
                Already have an account?
                <a href="login.html" class="fw-bold text-body"><u>Login here.</u></a>
              </p>
  
   
              <div class="col text-center">
                <button type="submit" class="btn btn-primary btn-block btn-lg">
                  <span>Create Account</span>
                </button>
              </div>
            </form>
          </div>
        </div>
 
    );
}

export default Login;