import React from 'react';
import { useParams } from 'react-router-dom';

const Dialog = ({ dialogs }) => {
  const { id } = useParams();
  const dialog = dialogs.find(d => d.id === parseInt(id));

  return (
    <div>
      <h2>{dialog.name}</h2>
      <p>{dialog.message}</p>
    </div>
  );
};

export default Dialog;
