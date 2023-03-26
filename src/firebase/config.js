import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCv7VTqjRD4akW3YAydXdX0cDE5pUpetoM",
    authDomain: "product-project-1.firebaseapp.com",
    projectId: "product-project-1",
    storageBucket: "product-project-1.appspot.com",
    messagingSenderId: "430237514919",
    appId: "1:430237514919:web:c98c539d3f399848226f82"
  };

  //počáteční inicializace
  firebase.initializeApp(firebaseConfig)

  // počáteční initializace služeb
  const projectFirestore = firebase.firestore()

  export { projectFirestore }