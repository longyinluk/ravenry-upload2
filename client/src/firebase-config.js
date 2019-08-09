import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
  apiKey: "AIzaSyCZfKH3u8niRH-zlFa9zx7M9m8AKwz85Ic",
  authDomain: "genuine-arena-248107.firebaseapp.com",
  databaseURL: "https://genuine-arena-248107.firebaseio.com",
  projectId: "genuine-arena-248107",
  storageBucket: "genuine-arena-248107.appspot.com",
  messagingSenderId: "99940021343"
}

firebase.initializeApp(config);

var storage = firebase.storage();

export {
    storage, firebase as default
};