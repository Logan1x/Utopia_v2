function QuizCard({ name, content, imgUrl }) {
  return (
    <div className="card">
      <img src={imgUrl} className="card-img" alt="quiz theme" />
      <div className="card-content">
        <h2 className="card-heading">{name}</h2>
        <p className="card-text">{content}</p>
        <button className="btn card-btn modalBtn">Start Now!!</button>
      </div>
    </div>
  );
}

export { QuizCard };
