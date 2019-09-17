import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {
  const [description, setDescription] = useState(props.currentDescription);

  useEffect(
    () => {
      setDescription(props.currentDescription);
    },
    [props],
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDescription({ ...description, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateDescription(description._id, description);
      }}
    >
      <div className="form-group">
        <label>Status</label>
        <label><b>Status</b></label>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="active" required checked={description.status === "active"} onChange={handleInputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="inlineRadio2" value="complete" checked={description.status === "complete"} onChange={handleInputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio2">Complete</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="inlineRadio3" value="archive" checked={description.status === "archive"} onChange={handleInputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio3">Archive</label>
        </div>
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={description.name} onChange={handleInputChange} autoComplete="off" required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input type="text" name="description" className="form-control" value={description.description} onChange={handleInputChange} autoComplete="off" required />
      </div>
      <button className="btn btn-primary" >Update Description</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-secondary">
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
