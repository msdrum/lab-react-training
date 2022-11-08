function Random({ min, max }) {
  return (
    <div className="random">
      <p>
        Random value between {min} and {max} =>
        {Math.round(Math.random() * (max - min) + min)}
      </p>
    </div>
  );
}

export default Random;
