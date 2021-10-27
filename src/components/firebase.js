import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";


var users = []

const firebaseConfig = {
  apiKey: "AIzaSyC7HrIKo6cxzlf1tycL7f4Z55ck9zZKl5k",
  authDomain: "photo-tagging-app-58d5f.firebaseapp.com",
  databaseURL: "https://photo-tagging-app-58d5f-default-rtdb.firebaseio.com",
  projectId: "photo-tagging-app-58d5f",
  storageBucket: "photo-tagging-app-58d5f.appspot.com",
  messagingSenderId: "121948087057",
  appId: "1:121948087057:web:b5acfcf3893b0b464722b0"
};


const app = initializeApp(firebaseConfig);

//const database = getDatabase(app);


function return_user_data() {
  return users
}


function writeUserData(name, time) {
  console.log(getUsers)
  const db = getDatabase();
  set(ref(db, 'users/' + name), {
    username: name,
    time: time,
  });
}


const db = getDatabase();
const getUsers = ref(db, 'users/');
onValue(getUsers, (snapshot) => {
  const data = snapshot.val();
  users = data
});

export default writeUserData

export { return_user_data }
