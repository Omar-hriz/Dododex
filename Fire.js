import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpqx4x-rWh2pQ1wg0um_LiASHjI851K_4",
  authDomain: "dododex-96f19.firebaseapp.com",
  projectId: "dododex-96f19",
  storageBucket: "dododex-96f19.appspot.com",
  messagingSenderId: "617843542005",
  appId: "1:617843542005:web:f21742cfbb317df3efc2bc",
  measurementId: "G-29GBZ1ZD5R"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class Fire {

  getDinos(callback) {
    const q = query(collection(db, 'Dinos'), orderBy('name', 'asc'))
    onSnapshot(q, snapshot => {
      let dinos = []
      snapshot.forEach(doc => {
        dinos.push({ id: doc.id, ...doc.data() })
      })
      callback(dinos)
    })
  }
  getKibbles(callback) {
    const q = query(collection(db, 'Kibbles'), orderBy('name', 'asc'))
    onSnapshot(q, snapshot => {
      let kibbles = []
      snapshot.forEach(doc => {
        kibbles.push({ id: doc.id, ...doc.data() })
      })
      callback(kibbles)
    })
  }
  getVegies(callback) {
    const q = query(collection(db, 'Vegies'), orderBy('name', 'asc'))
    onSnapshot(q, snapshot => {
      let vegies = []
      snapshot.forEach(doc => {
        vegies.push({ id: doc.id, ...doc.data() })
      })
      callback(vegies)
    })
  }
  getMeats(callback) {
    const q = query(collection(db, 'Meats'), orderBy('name', 'asc'))
    onSnapshot(q, snapshot => {
      let meats = []
      snapshot.forEach(doc => {
        meats.push({ id: doc.id, ...doc.data() })
      })
      callback(meats)
    })
  }
  addDino(dino) {
    addDoc(collection(db, 'Dinos'), dino)
  }
  S
  updateDino(dino) {
    updateDoc(doc(db, 'Dinos', dino.id), dino)
  }

  deleteDino(dino) {
    deleteDoc(doc(db, 'Dinos', dino.id))
  }
}
