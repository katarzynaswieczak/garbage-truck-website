import React from 'react';
import "../stylesheet/Sign.css";
import planet from '../images/planet.png';
import green from '../images/xtr.png';
import { auth, provider, db, firebase, providerGoogle } from '../Firebase/Firebase';



//Google auth system:
const signWithGoogle = () => {
  providerGoogle.setCustomParameters({ prompt: 'select_account' });
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    //Add person to DataBase: auth Google and getter email
    db.collection('user').doc(user.uid).set({
      email: user.email,
      imie: user.displayName
    }).then(() => {
      alert("Hello friend ")
    })
      .catch((error) => {
        alert(error.message);
      });
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};


//Facebook Auth
const signInFacebook = () => {
  auth().signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // The signed-in user info.
      var user = result.user;
      //Add person to DataBase: auth Facebook and getter email
      db.collection('user').doc(user.uid).set({
        email: user.email,
        imie: user.displayName
      }).then(() => {
        alert("Hello friend")
      })
        .catch((error) => {
          alert(error.message);
        });
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });

}

const Sign = () => {
  return (
    <div className="login">
      <div className="img_background">
        <img src={planet} alt="planet" />
      </div>
      <div className="img2_background">
        <img src={green} alt="green" />
      </div>

      <div className="login_content">

        <div className="login_forms">



          <form action="" className="login_create" id="login-in">
            <div className="wrapper">
              <div className="login_social">
                <div className="button">
                  <div className="icon"><i class='bx bxl-google' ></i></div>
                  <span onClick={signWithGoogle} className="gmail_auth">Zaloguj sie przez Google</span>
                </div>
                <div className="button">
                  <div className="icon"> <i class='bx bxl-facebook'></i></div>
                  <span onClick={signInFacebook} className="fb_auth">Zaloguj sie przez Facebook</span>
                </div>
              </div>

            </div>
            <p className="or">LUB</p>
            <h1 className="login_title">Zaloguj sie</h1>

            <div className="login_box">
              <i className='bx bx-at login_icon'></i>
              <input type="email" placeholder="Email" className="login_input" />
            </div>
            <div className="login_box">
              <i className='bx bx-lock login_icon'></i>
              <input type="password" placeholder="Hasło" className="login_input" />
            </div>
            <a href="#" className="login_button">Zaloguj</a>

            <div className="login_container">
              <span className="login_account">Nie masz jeszcze konta? </span>
              <span className="login_signup" id="sign-in"> Zarejestruj sie </span>
            </div>


          </form>

        </div>
      </div>
    </div>

  )
}

export default Sign
