import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddUserForm = (props) => {
  const initialFormState = { _id: null, name: '', status: '', description: '' };
  const [description, setDescription] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDescription({ ...description, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(description);
        if (!description.name || !description.status || !description.description) return;
        props.addDescription(description);
        setDescription(initialFormState);
      }}
    >
      <div className="form-group">
        <label><b>Status</b></label>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="active" required onChange={handleInputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="inlineRadio2" value="complete" onChange={handleInputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio2">Complete</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="inlineRadio3" value="archive" onChange={handleInputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio3">Archive</label>
        </div>
      </div>
      <div className="form-group">
        <label><b>Name</b></label>
        <input type="text" className="form-control" name="name" value={description.name} onChange={handleInputChange} autoComplete="off" required />
      </div>
      <div className="form-group">
        <label><b>Description</b></label>
        <input type="text" name="description" className="form-control" value={description.description} onChange={handleInputChange} autoComplete="off" required />
      </div>
      <button className="btn btn-primary">Add new description</button>
    </form>
  );
};

export default AddUserForm;

AddUserForm.propTypes = {
  addUser: PropTypes.func,
};
