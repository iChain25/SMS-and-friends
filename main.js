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

document.getElementById('reginfo').addEventListener('submit', submitForm);

  //submite form
function submitForm(e){
    e.preventDefault();
    var contactnum = getInputVal('contactnum');
    var street = getInputVal('street');

    var database = firebase.database();


    var alert = document.querySelector('.alert');
    if(alert){
        alert.style.display = 'block';
    }
    
    // Hide success message after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Create a new child in the database and set the inputted values
    database.ref('users/' + street).update({
        [contactnum]: true
    });

    // Clear form
    document.getElementById('reginfo').reset();

}

function getInputVal(id){
    return document.getElementById(id).value;
}
