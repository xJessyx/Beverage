// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-DQOg9tM0mwVQw2L8ALrKSNE_ZDuG93o",
    authDomain: "report12456.firebaseapp.com",
    databaseURL: "https://report12456.firebaseio.com",
    projectId: "report12456",
    storageBucket: "report12456.appspot.com",
    messagingSenderId: "545765695562",
    appId: "1:545765695562:web:099511016ce36412"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

if (document.getElementById('main').offsetHeight < height) {
  document.getElementById('main').style.height = (height-50) + 'px';
}

