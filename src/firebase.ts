import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//firebase의 api키 가져오기
const firebaseConfig = {
  apiKey: "AIzaSyB8pqpxE4GR1G0SFEkYVEalnhWDd-jIAu0",
  authDomain: "nwitter-griteach.firebaseapp.com",
  projectId: "nwitter-griteach",
  storageBucket: "nwitter-griteach.appspot.com",
  messagingSenderId: "597566792443",
  appId: "1:597566792443:web:1fb5ca5db248aa1215465e",
};

//firebaseConfig으로 초기화하기
const app = initializeApp(firebaseConfig);

//auth를 사용함으로써 firebase 서비스 이용하기
export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
