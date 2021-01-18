import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskDetails = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_TASK', id: task.id })}>
      <div className="title">{task.title}</div>
      <div className="detail">{task.detail}</div>
    </li>
  );
}

export default TaskDetails;