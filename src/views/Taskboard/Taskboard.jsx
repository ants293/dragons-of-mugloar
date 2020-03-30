import React, { useEffect } from "react";
import "./style.scss";
import MainViewWrapper from "../../components/Wrapper/Wrapper";
import { toast } from "react-toastify";
import TaskCard from "./TaskCard/TaskCard";
import PropTypes from "prop-types";

TaskboardView.propTypes = {
  actionRequestTaskList: PropTypes.func.isRequired,
  actionRequestTaskSolving: PropTypes.func.isRequired,
  tasks: PropTypes.shape({ taskList: PropTypes.array }),
  lives: PropTypes.number,
  redirect: PropTypes.func.isRequired,
  purgePlayerInfo: PropTypes.func.isRequired,
};

function TaskboardView({
  actionRequestTaskList,
  actionRequestTaskSolving,
  tasks = { taskList: [] },
  lives = 3,
  redirect,
  purgePlayerInfo,
}) {
  useEffect(() => {
    actionRequestTaskList();
  }, [actionRequestTaskList]);

  useEffect(() => {
    if (lives === 0) {
      purgePlayerInfo();
      redirect("/lose");
    }
  });

  const sortedTaskList = tasks.taskList.sort((a, b) =>
    sortTasksByDifficultyAndPrice(a, b)
  );

  return (
    <MainViewWrapper title="Noticeboard">
      <div className="col-12">
        <div className="row items-wall flex-wrap">
          {sortedTaskList.map((task) => (
            <TaskCard
              key={task.adId}
              task={task}
              onTaskClick={() =>
                actionRequestTaskSolving(task.adId).then((taskPassed) =>
                  throwTaskSolvingToast(taskPassed)
                )
              }
            />
          ))}
        </div>
      </div>
    </MainViewWrapper>
  );
}

const probabilityLevels = {
  "Piece of cake": 1,
  "Walk in the park": 2,
  "Sure thing": 3,
  "Quite likely": 4,
  Gamble: 5,
  "Hmmm....": 6,
  "Rather detrimental": 7,
  Risky: 8,
  "Suicide mission": 9,
};

const sortTasksByDifficultyAndPrice = (a, b) => {
  if (probabilityLevels[a.probability] < probabilityLevels[b.probability]) {
    return -1;
  }

  if (
    probabilityLevels[a.probability] === probabilityLevels[b.probability] &&
    a.reward < b.reward
  ) {
    return -1;
  }

  return 0;
};

const throwTaskSolvingToast = (taskPassed) => {
  if (taskPassed) {
    toast.success("Task was successfully finished");
  } else {
    toast.error("You messed up. -1 HP.");
  }
};

export default TaskboardView;
