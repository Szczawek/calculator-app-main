export default function Keyboard({ dispatch }) {
  return (
    <div className="keyboard">
      <div className="in-put-key">
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          7
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          8
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          9
        </button>
        <button className="delete" onClick={() => dispatch({ type: "delete" })}>
          DEL
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          4
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          5
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          6
        </button>
        <button onClick={(e) => dispatch({ type: e.target.textContent })}>
          +
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          1
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          2
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          3
        </button>
        <button onClick={(e) => dispatch({ type: e.target.textContent })}>
          -
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "dot", num: e.target.textContent })
          }>
          .
        </button>
        <button
          onClick={(e) =>
            dispatch({ type: "number", num: e.target.textContent })
          }>
          0
        </button>
        <button onClick={(e) => dispatch({ type: e.target.textContent })}>
          /
        </button>
        <button onClick={(e) => dispatch({ type: e.target.textContent })}>
          x
        </button>
      </div>
      <div className="out-put-key">
        <button className="reset" onClick={() => dispatch({ type: "reset" })}>
          RESET
        </button>
        <button onClick={() => dispatch({ type: "equals" })} className="equals">
          =
        </button>
      </div>
    </div>
  );
}
