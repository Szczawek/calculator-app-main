import Toolls from "./case/Toolls";
import Screen from "./case/Screen";
import Keyboard from "./case/Keyboard";
import { useReducer } from "react";

function reducer(value, action) {
  function equals() {
    if (value.sum != "" && value.memory != "")
      return {
        sum: calculation(value.expression, value.memory, value.sum),
        equals: true,
        memory: "",
      };
    return value;
  }

  function setZero() {
    return { sum: "0", zero: true, expression: "" };
  }

  function num() {
    if (value.sum[0] == "0" && !value.dot) value.sum = "";
    if (value.equals == true) return { sum: "0", memory: "" };

    return {
      sum: value.sum + action.num,
      memory: value.memory,
      expression: value.expression,
      equals: value.equals,
      dot: value.dot,
    };
  }

  switch (action.type) {
    case "reset":
      return setZero();
    case "delete":
      if (value.sum.length <= 1) return setZero();
      if (value.equals) return value;
      return {
        sum: value.sum.slice(0, value.sum.length - 1),
        expression: value.expression,
        memory: value.memory,
      };
    case "number":
      if (value.sum.length == 14) return value;
      return num();
    case "equals":
      return equals();
    case "dot":
      if (!value.sum.includes("."))
        return {
          sum: value.sum + action.num,
          memory: value.memory,
          expression: value.expression,
          equals: value.equals,
          dot: true,
        };
      return value;

    default:
      return { memory: value.sum, sum: "0", expression: action.type };
  }
}

export default function App() {
  const [value, dispatch] = useReducer(reducer, {
    sum: "0",
    memory: "",
    expression: "",
    equals: false,
    dot: false,
  });
  return (
    <div className="case">
      <Toolls />
      <Screen memory={value.memory} score={value.sum} />
      <Keyboard dispatch={dispatch} />
    </div>
  );
}

function calculation(phras, sumOne, sumTwo) {
  sumOne = Number(sumOne);
  sumTwo = Number(sumTwo);
  let total = 0;
  switch (phras) {
    case "-":
      total = sumOne - sumTwo;
      break;
    case "+":
      total = sumOne + sumTwo;
      break;
    case "/":
      total = sumOne / sumTwo;
      break;
    case "x":
      total = sumOne * sumTwo;
  }
  return `${total}`;
}
