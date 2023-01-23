const accountSid = "AC7540dbe3d6e54bda9a643d243d06cd11";
const authToken = "20b030e592a55a11e4bebf376b7c4bd3";
const twilio = require(package.json);
const client = twilio(accountSid, authToken);
//for firebase call
var config = {
    apiKey: "AIzaSyDFvbGkbdl8NGJZLXEJ0YBu8g_Wu5BNLlo",
    authDomain: "contactform-82a05.firebaseapp.com",
    databaseURL: "https://contactform-82a05-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contactform-82a05",
    storageBucket: "contactform-82a05.appspot.com",
    messagingSenderId: "753686371831",
    appId: "1:753686371831:web:c578b3c145a2465e5462f2"
  };

  firebase.initializeApp(config);
  var database = firebase.database();
  function useDatabase() {
    
  }

  //for array
  const contactNumList = [];
firebase
  .database()
  .ref("users")
  .child('cainta')
  .once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var contactNum = childSnapshot.val();
      contactNumList.push(contactNum);
    });
    //nugagawen sa contactNumList
    console.log(contactNumList);
  });

  //send button
document.getElementById('sendinfo').addEventListener('send', submitForm);
function submitForm(e){
    e.preventDefault();
    var msg = getInputVal('msg');
    var street = getInputVal('street');

    var database = firebase.database();

    client.messages.create({
        body: 'this is a test message',
        from: '+14632209825',  // Twilio phone number
        to: '+639983741908'  // Phone number to send the message to
     })
     .then(message => console.log(message.sid));
}







  function getInputVal(id){
    return document.getElementById(id).value;
}