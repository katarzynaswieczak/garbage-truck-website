import React from 'react';
import '../stylesheet/Sign.css';

function Sign() {
  return (
        <div class="login">
  <div class="login_content">
   
    <div class="login_img">
      <img src="" alt=""/>
    </div>
    
    <div class="login_forms">
      <form action="" class="login_register" id="login-in">
        <h1 class="login_title">Sign In </h1>
        <div class="login_box">
          <i class='bx bx-user login_icon'></i>
          <input type="text" placeholder="Username" class="login_input"/>
        </div>
           <div class="login_box">
          <i class='bx bx-lock login_icon'></i>
          <input type="password" placeholder="Password" class="login_input"/>
        </div>
          <a href="#" class="login_forgot">Forgot password?</a>
           <a href="#" class="login_button">Sign In</a>
          <div>
            <span class="login_account">Don't have an Account? </span>
            <span class="login_signin" id="sign-up">Sign up </span>
          </div>
          
          </form>
            
                <form action="" class="login_create none" id="login-up">
        <h1 class="login_title">Create Account</h1>
        <div class="login_box">
          <i class='bx bx-user login_icon'></i>
          <input type="text" placeholder="Username" class="login_input"/>
                  </div>
                  
           <div class="login_box">
          <i class='bx bx-at login_icon'></i>
          <input type="email" placeholder="Email" class="login_input"/>
        </div>
                   <div class="login_box">
          <i class='bx bx-lock login_icon'></i>
          <input type="password" placeholder="Password" class="login_input"/>
        </div>
                    <a href="#" class="login_button">Sign Up</a>

          <div>
            <span class="login_account">Already have an Account? </span>
            <span class="login_signup" id="sign-in">Sign in </span>
          </div>
          <div class="wrapper">
              <div class="login_social">
              <div class="button">
                <div class="icon"><i class='bx bxl-google' ></i></div>
                <span>Sing Up with Google</span>
                </div>
              
                   <div class="button">
                <div class="icon"> <i class='bx bxl-facebook-circle' ></i></div>
                <span>Sing Up with Facebook</span>
                </div>
                          </div>
              </div>
          </form>
            
        </div>
    </div>
  </div>

    )
}

export default Sign
