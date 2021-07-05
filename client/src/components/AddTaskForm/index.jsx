import React, { useState } from 'react';
import './index.scss';

const initialState = {
  title: '',
  description: '',
  price: 0,
};

export default function AddTaskForm({ submit }) {
  const [values, setValues] = useState({ ...initialState });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(values);
  };

  return (
    <div className="add-task-form-wrapper">
      <h3 className="add-task-form__header">Add New Task</h3>
      <form onSubmit={handleSubmit} className="add-task-form">
        <div className="add-task-form__group">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-task-form__group">
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            required
          />
        </div>

        <div className="add-task-form__group">
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="add-task-form__group">
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}
