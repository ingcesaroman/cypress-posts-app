import firebase from 'firebase'
import 'firebase/firestore'
import devEnv from '../config/dev.env'

const env = devEnv

// firebase init goes here

const config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId
}

console.log(config)

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}