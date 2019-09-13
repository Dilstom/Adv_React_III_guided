import React, { useState } from 'react';

const useCustomHook = initialValue => {
 const [inputText, setInputText] = useState(initialValue);
 const addSomething = e => {
  setInputText(e.target.value + e.target.value);
 };
 return [inputText, addSomething];
};

const DynamicTitle = () => {
 const [title, setTitle] = useState('This is a class component');
 const [inputText, setInputText] = useCustomHook('');

 const handleChanges = e => {
  setInputText(e);
 };

 const changeTitle = e => {
  e.preventDefault();
  setTitle(inputText);
  setInputText('');
 };

 return (
  <div className="Wrapper">
   <h1 className="Title">{title}</h1>
   <form onSubmit={changeTitle}>
    <div className="Input">
     <input
      className="Input-text"
      id="input"
      name="inputText"
      onChange={handleChanges}
      placeholder="Create new title"
      type="text"
      value={inputText}
     />
     <label htmlFor="input" className="Input-label">
      New title
     </label>
    </div>
   </form>
  </div>
 );
};

export default DynamicTitle;
