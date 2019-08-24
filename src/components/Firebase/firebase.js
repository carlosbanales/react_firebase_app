import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDLuW5Dy7W88F7Q4otzq2O1ZEJ7QZLJEo8",
  authDomain: "dempapp-38a7f.firebaseapp.com",
  databaseURL: "https://dempapp-38a7f.firebaseio.com",
  projectId: "dempapp-38a7f",
  storageBucket: "",
  messagingSenderId: "718478207162",
  appId: "1:718478207162:web:c1567263b46c548a"
}

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

}

export default Firebase;