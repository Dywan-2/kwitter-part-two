var firebaseConfig = {
    apiKey: "AIzaSyCf4o2_gvmUYOhnhgecbzFc-mkNk4dWpyI",
    authDomain: "the-kwitter-revamp-part2.firebaseapp.com",
    projectId: "the-kwitter-revamp-part2",
    storageBucket: "the-kwitter-revamp-part2.appspot.com",
    messagingSenderId: "770959961711",
    appId: "1:770959961711:web:b416b744944a640386679a",
    measurementId: "G-562DER72H9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
