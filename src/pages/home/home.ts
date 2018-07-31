import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import facebook and login response
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //initialize userdata
  userData = null;

  constructor(private facebook: Facebook) {

  }

  loginWithFB(){
    //login with facebook
    this.facebook.login(['email','public_profile']).then((response: FacebookLoginResponse)=>{
      //get user data
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720),picture.height(720).as(picture_large)',[]).then(profile=>{
       //assign to variables
        this.userData = {email: profile['email'],first_name:profile['first_name'],picture: profile['picture_large']['data']['url'],username:profile['name']};
        
      })
    })

  }
}
