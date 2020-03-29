import React, { useEffect } from "react";
import "./style.scss";
import MainViewWrapper from "../../components/Wrapper/Wrapper";
import { toast } from "react-toastify";
import TaskCard from "./TaskCard/TaskCard";

function TaskboardView({
  actionRequestTaskList = () => {},
  actionRequestTaskSolving = () => {},
  tasks = { taskList: [] },
  lives = 3,
  redirect = () => {},
  purgePlayerInfo = () => {},
}) {
  useEffect(() => {
    actionRequestTaskList();
  }, []);

  useEffect(() => {
    if (lives === 0) {
      purgePlayerInfo();
      redirect("/lose");
    }
  });

  return (
    <MainViewWrapper title="Noticeboard">
      <div className="col-12">
        <div className="row items-wall flex-wrap">
          {tasks.taskList.map((task) => (
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

const throwTaskSolvingToast = (taskPassed) => {
  if (taskPassed) {
    toast.success("Task was successfully finished");
  } else {
    toast.error("You messed up. -1 HP.");
  }
};

export default TaskboardView;
