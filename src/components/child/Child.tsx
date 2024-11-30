import React from "react";

const Child = ({ count, updateCount }) => {
  const handleCountUpdate = () => {
    updateCount();
  };
  return (
    <div>
      <span>Child count : {count}</span> &nbsp;&nbsp;
      <button onClick={handleCountUpdate}>Update</button>
    </div>
  );
};

export default Child;
