export const linkedin: string =
  "https://www.linkedin.com/in/kerasiya-vishnu-0j7j1j0j/";
export const github: string = "https://github.com/BarcaKerasiya";
export const mail: string = "vishnukerasiya@gmail.com";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export interface blogInterface {
  _id: number;
  title: string;
  IPAddress: string;
  content: string;
  thumbnail: string;
  datetime: string;
  minutesToRead: number;
  tagIds: tagInterface[];
  authorIds: authorInterface[];
  createdAt: string;
  updatedAt: string;
}

export interface tagInterface {
  _id: string;
  tagName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
export interface authorInterface {
  _id: string;
  tagName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
