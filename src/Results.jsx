import "./Results.css";
export default function Results() {
  return (
    <>
      <div className="results">
        <div className="results-title">Your Results</div>
        <div className="results-score">
          <p className="your-score">76</p>
          <p className="total-score">of 100</p>
        </div>
        <div className="results-tag">Great</div>
        <div className="results-desc">
          You scored higher than 65% of the people who have taken these tests
        </div>
      </div>
    </>
  );
}
