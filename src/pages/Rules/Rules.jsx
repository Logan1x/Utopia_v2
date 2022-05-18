import { Link, useParams } from "react-router-dom";

function Rules() {
  const { qid } = useParams();

  return (
    <div class="modal" id="modal">
      <div class="modal-body">
        <h2>There are some rules, you should follow before you go wandering</h2>
        <div class="model-text-left">
          <p>1. You can only attempt the quiz once.</p>
          <p>2. You can't go back to the quiz after you've attempted it.</p>
          <p>
            3. If you are found cheating using any source, you'll be discarded
            from future quizes.
          </p>
        </div>

        <div>
          <button class="btn card-btn">
            <Link to={`/quest/${qid}`}>Start the quiz?</Link>
          </button>
          <button class="btn card-btn btn-danger" id="closeModal">
            <Link to={`/themes`}>Go Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Rules };
