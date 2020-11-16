import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIRp0lBNvXamG-LPGCRlwCCHlLyOXKiQE',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'orama-bios',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '180960291963',
  appId: '1:180960291963:android:f7cb49f21a9217351a86de',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };