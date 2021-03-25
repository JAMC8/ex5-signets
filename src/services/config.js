/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyCq8AIp4VBWtww6QRA2uaU2q_zcZ8CYlHY",
  authDomain: "panier-achats.firebaseapp.com",
  databaseURL: "https://panier-achats-default-rtdb.firebaseio.com",
  projectId: "panier-achats",
  storageBucket: "panier-achats.appspot.com",
  messagingSenderId: "786866074949",
  appId: "1:786866074949:web:13f102114ad3459400ba2c"
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";