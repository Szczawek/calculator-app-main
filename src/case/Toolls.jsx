import { useEffect, useReducer } from "react";
import colors from "./colors.json";
if (!localStorage.getItem("variant")) {
  localStorage.setItem("variant", 2);
  localStorage.setItem("size", 3);
}
function reducer(state, action) {
  if (action.type == "changeColor") {
    let stateToReturn;
    let stateTwoToReturn;
    if (state.count == 2) {
      stateToReturn = 0;
      stateTwoToReturn = 0;
    } else {
      stateToReturn = state.count + 1;
      stateTwoToReturn = state.size + 1.5;
    }
    localStorage.setItem("variant", stateToReturn);
    localStorage.setItem("size", stateTwoToReturn);
    return { count: stateToReturn, size: stateTwoToReturn };
  }
}
export default function Toolls() {
  const [layout, dispatch] = useReducer(reducer, {
    count: Number(localStorage.getItem("variant")),
    size: Number(localStorage.getItem("size")),
  });

  // Please don't comment, I know very well how it looks like
  function slideAnimation() {
    document
      .getElementById("circle")
      .animate(
        { transform: `translateX(${layout.size}em)` },
        { duration: 500, fill: "forwards" }
      );
  }

  useEffect(() => {
    switchColor();
    slideAnimation();
  }, [layout]);

  function switchColor() {
    const index = colors.find((e) => e["type"] == layout.count);
    for (const [key, value] of Object.entries(index["color"])) {
      document.documentElement.style.setProperty(key, value);
    }
  }
  return (
    <div className="toolls-bar">
      <h1>calc</h1>
      <div>
        <p className="topic">THEME</p>
        <div className="layout-num">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <button
          onClick={() => dispatch({ type: "changeColor" })}
          id="change-style"
          className="style-slide">
          <div
      
            id="circle"
            className="slide-circle"></div>
        </button>
      </div>
    </div>
  );
}
