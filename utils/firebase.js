import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAwJwsh5bjUJBA3C6NMEGOmzdUv6eQ3jcg",
  authDomain: "samahan-consti-plebiscite-2020.firebaseapp.com",
  databaseURL: "https://samahan-consti-plebiscite-2020.firebaseio.com",
  projectId: "samahan-consti-plebiscite-2020",
  storageBucket: "samahan-consti-plebiscite-2020.appspot.com",
  messagingSenderId: "92766825240",
  appId: "1:92766825240:web:4ed7f84baecc3840224c6d",
  measurementId: "G-C5H8R5FCE2"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;