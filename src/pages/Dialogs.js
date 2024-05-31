import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DialogList from '../components/DialogList';
import Dialog from '../components/Dialog';

const dialogs = [
  { id: 1, name: 'mirmad', message: 'Привет, rapward' },
  { id: 2, name: 'rapward', message: 'Привет, mirmad' },
];

const Dialogs = () => {
  return (
    <Routes>
      <Route path="/" element={<DialogList dialogs={dialogs} />} />
      <Route path=":id" element={<Dialog dialogs={dialogs} />} />
    </Routes>
  );
};

export default Dialogs;
