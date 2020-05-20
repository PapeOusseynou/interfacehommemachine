import { Component } from '@angular/core';

import * as firebase from "firebase";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'livresgestion';
  constructor() {
    const config={
      apiKey: "AIzaSyAfqgjWWugFr62AG3FjuiYz44_mczTi1uQ",
      authDomain: "apprentis-eb41e.firebaseapp.com",
      databaseURL: "https://apprentis-eb41e.firebaseio.com",
      projectId: "apprentis-eb41e",
      storageBucket: "apprentis-eb41e.appspot.com",
      messagingSenderId: "411862292134",
      appId: "1:411862292134:web:0b733e35b30d60c2454667",
      measurementId: "G-ED0VBX8HZ8"
    }
    firebase.initializeApp(config);
  }
}
