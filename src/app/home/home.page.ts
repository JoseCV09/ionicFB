import { Component } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData = null;
  constructor(private facebook: Facebook) {}


  loginWithFacebook(){
    this.facebook.login(['email','public_profe']).then((response: FacebookLoginResponse)=>{
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile =>{
        this.userData = { 
          email: profile['email'],
          first_name: profile['first_name'],
          picture: profile['picture_large']['data']['url'],
          username: profile['name']
        } 
      })
    })
  }
}
