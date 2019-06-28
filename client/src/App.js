import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddUserForm from './forms/AddDescriptionForm';
import EditUserForm from './forms/EditDescriptionForm';
import UserTable from './tables/Table';

const App = () => {

  const initialFormState = { _id: null, name: '', status: '', description: '' };

  const [descriptions, setDescriptions] = useState([]);
  const [currentDescription, setCurrentDescription] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const fetchData = async () => {
    const result = await axios(
      'http://localhost:8081/api/listing',
    );
    setDescriptions(result.data.data);
  };

  const postData = async (description) => {
    // delete description['_id'];
    const response = await axios.post('http://localhost:8081/api/listing', description);
    setDescriptions([...descriptions, response.data.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addDescription = (description) => {
    postData(description);
  };

  const deleteDescription = (id) => {
    setEditing(false);
    axios.delete(`http://localhost:8081/api/listing/${id}`);
    setDescriptions(descriptions.filter(description => description._id !== id));
  };

  const updateDescription = (id, updatedDescription) => {
    setEditing(false);
    axios.put(`http://localhost:8081/api/listing/${id}`, updatedDescription);
    setDescriptions(descriptions.map(description => (description._id === id ? updatedDescription : description)));
  };

  const editRow = (description) => {
    setEditing(true);
    setCurrentDescription({ _id: description._id, name: description.name, status: description.status, description: description.description });
  };

  return (
    <div className="container">
      <h1>Sample App</h1>
      <div className="row">
        <div className="col-4">
          {editing ? (
            <>
              <h2>Update Description</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentDescription={currentDescription}
                updateDescription={updateDescription}
              />
            </>
        ) : (
          <>
            <h2>Add Description</h2>
            <AddUserForm addDescription={addDescription} />
          </>
          )}
        </div>
        <div className="col-8">
          <h2>View description</h2>
          <UserTable descriptions={descriptions} editRow={editRow} deleteDescription={deleteDescription} />
        </div>
      </div>
    </div>
  );
};

export default App;
