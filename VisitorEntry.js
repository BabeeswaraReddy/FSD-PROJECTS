import React, { useState } from 'react';

function VisitorEntry({ setVisitorName }) {
  const [inputName, setInputName] = useState('');
  const [welcome, setWelcome] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setVisitorName(inputName);
    setWelcome(`Welcome ${inputName} 🙏`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputName}
        onChange={e => setInputName(e.target.value)}
      />
      <button type="submit">Submit</button>
      <div>{welcome}</div>
    </form>
  );
}

export default VisitorEntry;
