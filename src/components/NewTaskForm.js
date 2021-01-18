import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const NewTaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', task: { title, detail }});
    setTitle('');
    setDetail('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task To Do" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Where/ When?" value={detail}
        onChange={(e) => setDetail(e.target.value)} required />
      <input type="submit" value="Add New Task" />
    </form>
  );
}
 
export default NewTaskForm;