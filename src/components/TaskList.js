import React, { useContext } from 'react';
import TaskDetails from './TaskDetails';
import { TaskContext } from '../contexts/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return tasks.length ? (
    <div className="task-list">
      <ul>
        {tasks.map(task => {
          return ( <TaskDetails task={task} key={task.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No tasks to do. Hello free time :D</div>
  );
}

export default TaskList;