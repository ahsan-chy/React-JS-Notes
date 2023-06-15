/* eslint-disable react/jsx-no-comment-textnodes */
// import React, { useRef, useState } from 'react';

// const UserForm = () => {
//   const [name, setName] = useState('');
//   const nameRef = useRef(null);

//   const handleSubmit = () => {
//     if (!name) {
//       nameRef.current.focus();
//     }
//     console.log(name)
//   };
// //   const handleFocus = () => {
// //     if (nameRef.current) {
// //       nameRef.current.style.borderColor = 'red';
// //     }
// //   };

//   return (
//     <div className='App'>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value) } ref={nameRef} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default UserForm;

// - 2nd useRef
// import React, { useRef } from 'react';

// const UserForm = () => {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleSubmit = () => {
//     const refs = [nameRef, emailRef, passwordRef];

//     for (let ref of refs) {
//       if (ref.current && !ref.current.value) {
//         ref.current.focus();
//         break;
//       }
//     }
//   };

//   const handleFocus = (ref) => {
//     if (ref.current) {
//       ref.current.style.borderColor = 'red';
//     }
//   };

//   return (
//     <div className='App'>
//       <input type='text' placeholder='Name' ref={nameRef} onFocus={() => handleFocus(nameRef)} />
//       <input type='email' placeholder='Email' ref={emailRef} onFocus={() => handleFocus(emailRef)} />
//       <input type='password' placeholder='Password' ref={passwordRef} onFocus={() => handleFocus(passwordRef)} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default UserForm;

// - 3rd useRef
// import React, { useRef } from 'react';

// const UserForm = () => {
//   const nameRef = useRef('');
//   const emailRef = useRef('');
//   const checkboxRef = useRef(null);
//   const selectRef = useRef(null);
//   const radioRef = useRef(null);

//   const handleSubmit = () => {
//     const refs = [nameRef, emailRef, checkboxRef, selectRef, radioRef];

//     for (let ref of refs) {
//       if (ref.current) {
//         const elementType = ref.current.type;
//         let value;
//         if (elementType === 'checkbox') {
//           value = ref.current.checked;
//         } else if (elementType === 'select-one') {
//           value = ref.current.value;
//         } else {
//           value = ref.current.value.trim();
//         }

//         if (!value) {
//           ref.current.focus();
//           break;
//         }
//       }
//     }
//   };

//   const handleFocus = (ref) => {
//     if (ref.current) {
//       ref.current.style.borderColor = 'red';
//     }
//   };

//   return (
//     <div className='App'>
//       <input type='text' placeholder='Name' ref={nameRef} onFocus={() => handleFocus(nameRef)} />
//       <input type='email' placeholder='Email' ref={emailRef} onFocus={() => handleFocus(emailRef)} />
//       <input type='checkbox' ref={checkboxRef} onFocus={() => handleFocus(checkboxRef)} />
//       <select ref={selectRef} onFocus={() => handleFocus(selectRef)}>
//         <option value=''>Select an option</option>
//         <option value='option1'>Option 1</option>
//         <option value='option2'>Option 2</option>
//       </select>
//       <input type='radio' name='radioGroup' ref={radioRef} onFocus={() => handleFocus(radioRef)} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default UserForm;

//- 4 Select useRef
// import React, { useState, useEffect, useRef } from "react";

// const UserForm = () => {
//   const [myData, setMyData] = useState("");
//   const countRef = useRef(0);

//   useEffect(() => {
//     countRef.current = countRef.current + 1;
//   });

//   return (
//     <div className="App">
//       <input
//         type="text"
//         value={myData}
//         onChange={(e) => setMyData(e.target.value)}
//       />
//       <p>Number only {countRef.current} time re-Render</p>  {/*  On First Run it will add two - redender 2 times  */}
//     </div>
//   );
// };

// export default UserForm;

//- 5 useRef - Previous & Current
import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
    const [name, setName] = useState('');
  const previousNameRef = useRef('');

  useEffect(() => {
    previousNameRef.current = name;
  }, [name]);

  return (
    <div>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Current Value: {name}</h2>
      <h3>Previous Value: {previousNameRef.current}</h3>
    </div>
  );
};

export default MyComponent;
