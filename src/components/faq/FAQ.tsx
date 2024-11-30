import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const FAQ = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [currentActiveTab, setCurrentActiveTab] = useState(null);
  console.log("currentActiveTab", currentActiveTab);
  const data = [
    { id: 1, title: "A", content: "lorem A" },
    { id: 2, title: "B", content: "lorem B" },
    { id: 3, title: "C", content: "lorem C" },
    { id: 4, title: "D", content: "lorem D" },
    { id: 5, title: "E", content: "lorem E" },
    { id: 6, title: "F", content: "lorem F" },
  ];

  const handleToggle = (item) => {
    setIsToggle(!isToggle);
    setCurrentActiveTab(item.id);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <section style={{ width: "80%", background: "gray" }}>
        {data.map((item) => {
          return (
            <div
              onClick={() => handleToggle(item)}
              key={item.id}
              style={{ padding: "1rem" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>{item.title}</h3>{" "}
                <span>
                  {isToggle ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </span>
              </div>
              {currentActiveTab === item.id && item.content}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FAQ;

// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 10);
//  }
// const multiple = () => {

//     return multiple ();
// }

// multiple(2)(3)
