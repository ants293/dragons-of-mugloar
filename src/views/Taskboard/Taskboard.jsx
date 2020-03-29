import React, { useEffect } from "react";
import "./style.scss";
import MainViewWrapper from "../../components/Wrapper";

function TaskboardView({
  actionRequestTaskList = () => {},
  tasks = { taskList: [] },
}) {
  useEffect(() => {
    actionRequestTaskList();
  }, []);

  return (
    <MainViewWrapper title="Available jobs">
      <div className="col-12 items-wall d-flex flex-wrap">
        {tasks.taskList.map((task) => (
          <div className="items-wall__item task-card">
            <div className="task-card__header">
              <span className="task-card__header-item">
                <span>Reward:</span>
                {task.reward}
              </span>
              <span className="task-card__header-item">
                <span>Difficulty:</span>
                {task.probability}
              </span>
              <span className="task-card__header-item">
                <span>Expires in:</span>
                {task.expiresIn}
              </span>
            </div>
            <div className="task-card__content">{task.message}</div>
            <div className="task-card__footer">
              <button className="main-button">Do it!</button>
            </div>
          </div>
        ))}
        <div>list here</div>
      </div>
    </MainViewWrapper>
  );
}

export default TaskboardView;
