// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import store from "../store/store";

const fbConfig = firebase.initializeApp({
	apiKey: "AIzaSyDf4JSuZHVFcnm9105UB0dvyh9E3H4q1H4",
	authDomain: "instagram-clone-da8dc.firebaseapp.com",
	projectId: "instagram-clone-da8dc",
	storageBucket: "instagram-clone-da8dc.appspot.com",
	messagingSenderId: "582780825149",
	appId: "1:582780825149:web:2baf214e58baac62368454",
	measurementId: "G-M156M3MRHT",
});

const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true,
	// enableLogging: false
};

const rrfProps = {
	firebase,
	config: rrfConfig,
	fbConfig,
	dispatch: store.dispatch,
	// createFirestoreInstance
};

// const db = fbConfig.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default rrfProps;
// export { fbConfig, db, auth, storage };
