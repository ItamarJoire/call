import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBh2K1xHrqq9Dpa_hbIKN33lELGKBiaUWs',
  authDomain: 'call-7f15c.firebaseapp.com',
  projectId: 'call-7f15c',
  storageBucket: 'call-7f15c.appspot.com',
  messagingSenderId: '1007594734306',
  appId: '1:1007594734306:web:d91218d0c1722d000b94bb'
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }
