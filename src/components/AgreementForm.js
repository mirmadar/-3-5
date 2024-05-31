import React, { useState } from 'react';
import '../App.css';

const AgreementForm = () => {
  const [isChecked, setIsChecked] = useState(false); // Состояние чекбокса

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      alert('Соглашение принято!');
    } else {
      alert('Пожалуйста, примите соглашение');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="agreement-form">
      <label className="checkbox-label">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span>Я принимаю пользовательское соглашение</span>
      </label>
      <button type="submit" disabled={!isChecked}>Подтвердить</button>
    </form>
  );
};

export default AgreementForm;
