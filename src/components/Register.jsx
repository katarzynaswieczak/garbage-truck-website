import React from 'react';
import "../stylesheet/Register.css";
import  planet from '../images/planet.png';
import green from '../images/xtr.png';

const Register = () => {
    return (
        
<div className="login">
  <div className="img_background">
    <img src={planet} alt="planet"/>
    </div>
  <div className="img2_background">
 <img src={green} alt="green" />
   </div>
  
  <div className="login_content">
   
    <div className="login_forms">

            
                <form action="" className="login_create" id="login-up">
                   <div className="wrapper">
            <div className="login_social">
               <div className="button">
                <div className="icon"><i class='bx bxl-google' ></i></div>
                <span>Zarejestruj sie przez Google</span>
                </div>
              <div className="button">
                <div className="icon"> <i class='bx bxl-facebook'></i></div>
                <span>Zarejestruj sie przez Facebook</span>
                </div>
            </div>
    
                          </div>
                  <p className="or">LUB</p>
        <h1 className="login_title">Zarejestruj sie</h1>
                  
                  
        <div className="login_box">
          <i className='bx bx-user login_icon'></i>
          <input type="text" placeholder="Nazwa" className="login_input"/>
                  </div>
                  
           <div className="login_box">
          <i className='bx bx-at login_icon'></i>
          <input type="email" placeholder="Email" className="login_input"/>
        </div>
                   <div className="login_box">
          <i className='bx bx-lock login_icon'></i>
          <input type="password" placeholder="Hasło" className="login_input"/>
        </div>
                    <a href="#" className="login_button">Zarejestruj sie</a>

          <div className="login_container">
            <span className="login_account">Masz już konto? </span>
            <span className="login_signup" id="sign-in"> Zaloguj sie </span>
          </div>
         
              
          </form>
            
        </div>
    </div>
  </div>

    )
}

export default Register
