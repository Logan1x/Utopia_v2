import { Link, useParams } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";
import "./Rules.css";

function Rules() {
  const { qid } = useParams();
  const { dispatch } = useDataContext();

  const clearReducer = () => {
    dispatch({ type: "SET_SCORE", payload: 0 });
    dispatch({ type: "SET_QID", payload: null });
    dispatch({ type: "SET_QIDOPTIONS", payload: [] });
  };
  return (
    <div className="modal" id="modal">
      <div className="modal-body">
        <h2>There are some rules, you should follow before you go wandering</h2>
        <div className="model-text-left">
          <p>1. You can only attempt the quiz once.</p>
          <p>2. You can't go back to the quiz after you've attempted it.</p>
          <p>
            3. If you are found cheating using any source, you'll be discarded
            from future quizes.
          </p>
        </div>

        <div className="rules-next-btns">
          <Link to={`/quest/${qid}`} onClick={clearReducer}>
            <button className="btn card-btn">Start the quiz?</button>
          </Link>
          <Link to={`/themes`}>
            <button className="btn card-btn btn-danger" id="closeModal">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Rules };
