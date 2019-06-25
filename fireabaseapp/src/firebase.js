import {initializeApp} from 'firebase';
import './creedentials'

const config= {
    apiKey:apikey_firebase,
    authDomain: authDomain_firebase,
    databaseURL: DatabaseURl_firebase,
    projectId: ProjectID_firebase,
    storageBucket: StorageBucket_firebase,
    messagingSenderId: messageSignSenderID_firebase,
    appId: AppID_firebase
  }
const app = initializeApp(config);


export const db = app.database();

export const namesRef = db.ref('names');
