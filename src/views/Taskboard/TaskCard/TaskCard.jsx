import React from "react";
import PropTypes from "prop-types";

TaskCard.propTypes = {
  onTaskClick: PropTypes.func.isRequired,
  task: PropTypes.shape({
    reward: PropTypes.number,
    probability: PropTypes.string,
    expiresIn: PropTypes.number,
    message: PropTypes.string,
  }),
};

function TaskCard({ task, onTaskClick }) {
  return (
    <div className="col-4 task-card">
      <div className="items-wall__item">
        <div className="task-card__header mb-2">
          <span className="task-card__header-item">
            <span className="bold mr-1 task-card__header-col">Reward:</span>
            <span className="task-card__header-col">{task.reward} gold</span>
          </span>
          <span className="task-card__header-item">
            <span className="bold mr-1 task-card__header-col">Difficulty:</span>
            <span className="task-card__header-col">{task.probability}</span>
          </span>
          <span className="task-card__header-item">
            <span className="bold mr-1 task-card__header-col">Expires in:</span>
            <span className="task-card__header-col">
              {task.expiresIn} turns
            </span>
          </span>
        </div>
        <div className="task-card__content mb-3">{task.message}</div>
        <div className="task-card__footer">
          <button className="main-button" onClick={() => onTaskClick()}>
            Do job
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
