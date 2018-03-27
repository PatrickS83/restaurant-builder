// React <--> Firebase connection for state
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMf6gNP7axhLniP041CH1bCxyM0LGGvOM",
  authDomain: "restaurant-builder.firebaseapp.com",
  databaseURL: "https://restaurant-builder.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is default export
export default base;
