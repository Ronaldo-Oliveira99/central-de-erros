// Configurações de Conexão com o firebase
import firebase from 'firebase';

// Essa constante é gerada dentro do firebase para efetuar o login
const firebaseConfig = {
  apiKey: "AIzaSyAKWFedtl-mPyO_5zlFv97NRZqBKeL3wX4",
  authDomain: "centraldeerros-46378.firebaseapp.com",
  databaseURL: "https://centraldeerros-46378.firebaseio.com",
  projectId: "centraldeerros-46378",
  storageBucket: "centraldeerros-46378.appspot.com",
  messagingSenderId: "590116055568",
  appId: "1:590116055568:web:8e796f55f6bc1e9fd6f895"
};

// Initialize do Firebase
export default firebase.initializeApp(firebaseConfig);