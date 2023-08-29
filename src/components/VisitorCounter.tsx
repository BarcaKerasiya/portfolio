import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "../constants/constants";
import { ref, onValue, runTransaction } from "firebase/database";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const visitorsRef = ref(database, "visitors");
    onValue(visitorsRef, (snapshot) => {
      const count = snapshot.val() || 0;
      setVisitorCount(count);
    });
    runTransaction(visitorsRef, (currentCount) => (currentCount || 0) + 1);
    return () => {
      // Turn off the listener
      // You can also use `off` function from 'firebase/database' if using Firebase v9.5.0 or later
      // For earlier versions, you can use `onValue` with `null` as the second argument to remove the listener.
    };
  }, []);

  return (
    <>
      <h2>Total Visitors: {visitorCount}</h2>
    </>
  );
};

export default VisitorCounter;
