import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDOhr98_MVdvZJQRYFMl0zvTE5IS2Z3XMY',
  authDomain: 'web-xerpihan.firebaseapp.com',
  projectId: 'web-xerpihan',
  storageBucket: 'web-xerpihan.appspot.com',
  messagingSenderId: '668813233913',
  appId: '1:668813233913:web:478e8eac202d855d055c28',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
