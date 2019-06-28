import React from 'react';

const UserTable = props => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Status</th>
        <th>Name</th>
        <th>Description</th>
        <th className="action-th">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.descriptions.length > 0 ? (
        props.descriptions.map(description => (
          <tr key={description._id}>
            <td>{description.status}</td>
            <td>{description.name}</td>
            <td>{description.description}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(description);
                }}
                className="btn btn-primary"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteDescription(description._id)}
                className="btn btn-danger"
                title="Delete decription"
              >
                X
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Descriptions</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
