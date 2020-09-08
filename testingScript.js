var firebaseConfig = {
    apiKey: "AIzaSyA9F6zriCDRHGeu-LwJ83CplHUKkQVCr0M",
    authDomain: "corona-9e261.firebaseapp.com",
    databaseURL: "https://corona-9e261.firebaseio.com",
    projectId: "corona-9e261",
    storageBucket: "corona-9e261.appspot.com",
    messagingSenderId: "694830677499",
    appId: "1:694830677499:web:b9382e363351f4b3701f5e"
  };

  firebase.initializeApp(firebaseConfig);
  //refer messages 
  var messagesRef=firebase.database().ref('messages')
//listen for form submit
document.getElementById('testForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var name =getInputVal('name');
    var mobile =getInputVal('mobile');
    var age =getInputVal('age');
    var email =getInputVal('email');
    var profession =getInputVal('profession');
    var dateofbirth =getInputVal('dateofbirth');
    saveMessages(name,mobile,age,email,profession,dateofbirth) 
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessages(name,mobile,age,email,profession,dateofbirth){
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        name:name,
        mobile:mobile,
        age:age,
        email:email,
        profession:profession,
        dateofbirth:dateofbirth
    })
}