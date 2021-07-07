import React, { useState, useContext, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { filterTasks } from '../../utils';
import { SocketContext } from '../../socket';
import { useActions } from '../../hooks/useAction';
import { useSelector } from 'react-redux';
import { AddTaskForm, Modal, TrelloList } from '../../components';
import { authUtils } from '../../utils';
import './index.scss';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);

  const { addTask, getTasks, updateTask } = useActions();
  const { tasks } = useSelector((state) => state.task);
  const { role, isAuthenticated } = useSelector((state) => state.auth);
  const { socket } = useContext(SocketContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const handleAddTask = async (task) => {
    await addTask(socket, task);
    closeForm();
  };

  const handleDrag = (result) => {
    if (!result.destination) return;

    updateTask({
      socket,
      srcId: result.source.droppableId,
      destId: result.destination.droppableId,
      srcIdx: result.source.index,
      destIdx: result.destination.index,
      cardId: result.draggableId,
    });
  };

  useEffect(() => getTasks(), []);

  return (
    <div className="screen dashboard-screen">
      <DragDropContext onDragEnd={handleDrag}>
        <div className="dashboard-screen">
          <div className="lists-container">
            {filterTasks(tasks).map((list) => (
              <TrelloList
                title={list.title}
                cards={list.tasks}
                key={list.id}
                id={list.id}
                allowedToDrop={authUtils.allowedToDrop(
                  list.id,
                  role,
                  isAuthenticated
                )}
              />
            ))}
          </div>

          {showForm && (
            <Modal show={showForm} closeModal={closeForm}>
              <AddTaskForm submit={handleAddTask} />
            </Modal>
          )}
          <div className="add-task-btn-wrapper">
            <button className="add-task-btn" onClick={openForm}>
              Add Task
            </button>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
