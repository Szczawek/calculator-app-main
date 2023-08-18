export default function Screen({ score, memory }) {
  return (
    <div className="screen-case">
      <p className="memory-screen" >{memory}</p>
      <p  className="screen">{score}</p>
    </div>
  );
}
