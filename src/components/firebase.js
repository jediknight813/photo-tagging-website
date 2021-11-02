import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update } from "firebase/database";


var users = []
var current_username = ""


const firebaseConfig = {
  apiKey: "AIzaSyC7HrIKo6cxzlf1tycL7f4Z55ck9zZKl5k",
  authDomain: "photo-tagging-app-58d5f.firebaseapp.com",
  databaseURL: "https://photo-tagging-app-58d5f-default-rtdb.firebaseio.com",
  projectId: "photo-tagging-app-58d5f",
  storageBucket: "photo-tagging-app-58d5f.appspot.com",
  messagingSenderId: "121948087057",
  appId: "1:121948087057:web:b5acfcf3893b0b464722b0"
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

//const database = getDatabase(app);


function return_user_data() {
  return users
}


function item_one_found() {
  const db = getDatabase();
  update(ref(db, 'users/' +  current_username), {
    item_one_found: true,
  });
}


function item_two_found() {
  const db = getDatabase();
  update(ref(db, 'users/' +  current_username), {
    item_three_found: true,
  });
}


function item_three_found() {
  const db = getDatabase();
  update(ref(db, 'users/' +  current_username), {
    item_two_found: true,
  });
}

function updateUserTime(time, name) {
  console.log(name)
  let new_time = get_current_user_data()
  time = new_time['time'] + time
  const db = getDatabase();
  update(ref(db, 'users/' +  name), {
    time: + time,
  });
}



function writeUserData(name, time) {
  current_username = name
  const db = getDatabase();
  set(ref(db, 'users/' +  name), {
    username: name,
    time: time,
    item_one_found: false,
    item_two_found: false,
    item_three_found: false,
  });
}


function get_current_user_data() {
  return users[current_username]

}


const db = getDatabase();
const getUsers = ref(db, 'users/');
onValue(getUsers, (snapshot) => {
  const data = snapshot.val();
  users = data
});

export default writeUserData

export { return_user_data, item_one_found, item_two_found, item_three_found, get_current_user_data, updateUserTime }
