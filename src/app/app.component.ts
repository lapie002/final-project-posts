import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){
    var config = {
      apiKey: "AIzaSyCNFhxPr1W0E1bhxP1vGs9zR52XPChYaoA",
      authDomain: "http-posts-demo.firebaseapp.com",
      databaseURL: "https://http-posts-demo.firebaseio.com",
      projectId: "http-posts-demo",
      storageBucket: "http-posts-demo.appspot.com",
      messagingSenderId: "374205400836"
    };
    firebase.initializeApp(config);
  }

}
