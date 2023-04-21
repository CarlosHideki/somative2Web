import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyBQ-A88atc4IUKDPVZqcEx9fHsXCXwonHo",
  authDomain: "cadastrocarlos-d3a06.firebaseapp.com",
  projectId: "cadastrocarlos-d3a06",
  storageBucket: "cadastrocarlos-d3a06.appspot.com",
  messagingSenderId: "319959947256",
  appId: "1:319959947256:web:bb086325b10ff631d2680d"
  
};


if(!firebase.apps.length) {

  firebase.initializeApp(firebaseConfig)

};

export default firebase