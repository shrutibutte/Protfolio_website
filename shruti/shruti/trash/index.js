//  used  to Grap onto Firebase -> connection
const firebaseConfig = {
    apiKey: "AIzaSyARU_rraLhmM6RHv86l2SNpP0_HHED1lCM",
    authDomain: "contactform-9150e.firebaseapp.com",
    projectId: "contactform-9150e",
    storageBucket: "contactform-9150e.appspot.com",
    messagingSenderId: "33764850434",
    appId: "1:33764850434:web:135778079078dc9c7b601b"
  };

  // init firebase 

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();


  // Start grabbing our DOM Element 
  const submitBtn = document.querySelector('#submit');

  let FirstName = document.querySelector('#fname');
  let LastName = document.querySelector('#lname');
  let Email = document.querySelector('#email');
  let PhoneNo = document.querySelector('#phoneNo');


const db = firestore.collection("ContactData");

submitBtn.addEventListener('click' , function(){
    let FirstNameInput = FirstName.value;
    let LastNameInput = LastName.value;
    let EmailInput = email.value;
    let PhoneNoInput = PhoneNo.value;
   
    // Access the Database Collection 
    db.doc().set({
        firstname:userFirstNameInput,
        lastname:userLastNameInput,
        email : useremailInput,
        phone : userPhoneNoInput
    }).then(function(){
        console.log("Data Saaved")
    })
    .catch(function(error){
        console.log(error);
    });
     
});