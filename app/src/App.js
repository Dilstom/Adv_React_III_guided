import React, { useState } from 'react';
// import DynamicTitle from './DynamicTitle';
import './App.css';

function App() {
 const [password, setPassword] = useState('');
 const [isValid, setIsValid] = useState(false);
 //  const passValidatorArray = usePasswordValidator();
 const validatePass = pass => {
  if (pass.length > 7) {
   setIsValid(true);
  } else {
   setIsValid(false);
  }
 };
 //  console.log(passValidatorArray);
 console.log(isValid, setIsValid);
 return (
  <div className="App">
   {/* <DynamicTitle /> */}
   <p>Make sure your password is at least 8 chars</p>
   <form action="">
    <label>Create a New Password</label>
    <input
     placeholder="Create Password"
     value={password}
     onChange={e => {
      setPassword(e.target.value);
      validatePass(e.target.value);
     }}
    />
    {isValid ? <h3>Password is Valid</h3> : <h3>Password is Invalid</h3>}
   </form>
  </div>
 );
}

export default App;

// const usePasswordValidator = () => {
//  const [isValid, setIsValid] = useState(false);

//  const validatePass = pass => {
//   if (pass.length > 7) {
//    setIsValid(true);
//   } else {
//    setIsValid(false);
//   }
//  };
//  return [isValid, validatePass, 'Jow'];
//  //  same as
//  //  return {
//  //      isValid: isValid,
//  //      validatePass: validatePass
//  //  }
// };

// function App() {
//  const [password, setPassword] = useState('');
//  const [isValid, validatePass, person] = usePasswordValidator();
//  //  const passValidatorArray = usePasswordValidator();

//  //  console.log(passValidatorArray);
//  console.log(isValid, validatePass, person);
//  return (
//   <div className="App">
//    {/* <DynamicTitle /> */}
//    <p>Make sure your password is at least 8 chars</p>
//    <form action="">
//     <label>Create a New Password</label>
//     <input
//      placeholder="Create Password"
//      value={password}
//      onChange={e => {
//       setPassword(e.target.value);
//       validatePass(e.target.value);
//      }}
//     />
//     {isValid ? <h3>Password is Valid</h3> : <h3>Password is Invalid</h3>}
//    </form>
//   </div>
//  );
// }

// export default App;
