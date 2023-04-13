import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

    
 
    apiKey: "AIzaSyCH6dn56myHNPFPZyHW8CPm31PKcox-wfo",
    authDomain: "class-test-c2dd9.firebaseapp.com",
    databaseURL: "https://class-test-c2dd9-default-rtdb.firebaseio.com",
    projectId: "class-test-c2dd9",
    storageBucket: "class-test-c2dd9.appspot.com",
    messagingSenderId: "215576371466",
    appId: "1:215576371466:web:2e536943ae864b31111af3"
  
  
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();