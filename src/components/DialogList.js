import React from 'react';

const DialogList = ({ dialogs }) => {
  return (
    <div>
      {dialogs.map(dialog => (
        <div key={dialog.id}>
          <h2>{dialog.name}</h2>
          <p>{dialog.message}</p>
        </div>
      ))}
    </div>
  );
};

export default DialogList;
