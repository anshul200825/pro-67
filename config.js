import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyBFVtzQdLB4TnNJV3Ui4ZFXW5J0naNoZl0",
  authDomain: "class-test-6e03f.firebaseapp.com",
  projectId: "class-test-6e03f",
  storageBucket: "class-test-6e03f.appspot.com",
  messagingSenderId: "127046120249",
  appId: "1:127046120249:web:e760a9fbc2326dd3d62ee8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();