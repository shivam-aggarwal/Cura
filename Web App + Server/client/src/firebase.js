import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD4FEs8F7xUOx_JUG_b9kj8k26YUy2Rw80",
    authDomain: "cura-3fb51.firebaseapp.com",
    databaseURL: "https://cura-3fb51.firebaseio.com",
    projectId: "cura-3fb51",
    storageBucket: "cura-3fb51.appspot.com",
    messagingSenderId: "468594597481",
    appId: "1:468594597481:web:fe64aa191f0ac97f670cf8"
};

firebase.initializeApp(firebaseConfig);
export default firebase;