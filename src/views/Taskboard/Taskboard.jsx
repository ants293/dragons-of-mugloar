import React, { useEffect } from "react";
import "./style.scss";
import MainViewWrapper from "../../components/Wrapper";
import { toast } from "react-toastify";

function TaskboardView({
  actionRequestTaskList = () => {},
  actionRequestTaskSolving = () => {},
  tasks = { taskList: [] },
}) {
  useEffect(() => {
    actionRequestTaskList();
  }, []);

  return (
    <MainViewWrapper title="Available jobs">
      <div className="col-12">
        <div className="row items-wall flex-wrap">
          {tasks.taskList.map((task) => (
            <div className="col-4 task-card">
              <div className="items-wall__item">
                <div className="task-card__header mb-2">
                  <span className="task-card__header-item">
                    <span className="bold mr-1 task-card__header-col">
                      Reward:
                    </span>
                    <span className="task-card__header-col">
                      {task.reward} gold
                    </span>
                  </span>
                  <span className="task-card__header-item">
                    <span className="bold mr-1 task-card__header-col">
                      Difficulty:
                    </span>
                    <span className="task-card__header-col">
                      {task.probability}
                    </span>
                  </span>
                  <span className="task-card__header-item">
                    <span className="bold mr-1 task-card__header-col">
                      Expires in:
                    </span>
                    <span className="task-card__header-col">
                      {task.expiresIn} turns
                    </span>
                  </span>
                </div>
                <div className="task-card__content mb-3">{task.message}</div>
                <div className="task-card__footer">
                  <button
                    className="main-button"
                    onClick={() =>
                      actionRequestTaskSolving(task.adId).then((taskPassed) =>
                        handleTaskSolving(taskPassed)
                      )
                    }
                  >
                    Do it!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainViewWrapper>
  );
}

const handleTaskSolving = (taskPassed) => {
  if (taskPassed) {
    toast.success("Task was successfully finished");
  } else {
    toast.error("You messed up. -1 HP.");
  }
};

export default TaskboardView;
