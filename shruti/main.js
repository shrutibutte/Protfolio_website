$('.slick-slider-for').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    autoplaySpeed:1000,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
});

const firebaseConfig = {
  apiKey: "AIzaSyARU_rraLhmM6RHv86l2SNpP0_HHED1lCM",
  authDomain: "contactform-9150e.firebaseapp.com",
  databaseURL: "https://contactform-9150e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contactform-9150e",
  storageBucket: "contactform-9150e.appspot.com",
  messagingSenderId: "33764850434",
  appId: "1:33764850434:web:135778079078dc9c7b601b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("portfolio-contact-form");

// Listen for a submit
document.querySelector(".detailsFetch").addEventListener("submit", submitForm);

function submitForm(e){

    e.preventDefault();

    //   Get input Values
    let fullName = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let msg = document.getElementById("message").value;

    console.log(fullName, email,msg);

    saveContactInfo(fullName, email, msg);

    displayAlert();

    document.querySelector(".detailsFetch").reset();
}

// Save infos to Firebase
function saveContactInfo(fullName, email, msg) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        Name: fullName,
        Email : email,
        Message: msg,
    });
}

function displayAlert() {
    swal({
        title: "Thank you!",
        text: "I will contact you soon",
        icon: "success",
        button: "Done",
    });
}