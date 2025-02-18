// // import React, {useState} from 'react';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// // import { auth } from '../../firebase';

// // const Signin = () => {
// //     const navigate = useNavigate();

// //     const [email, setEmail] = useState('')
// //     const [password, setPassword] = useState('');

// //     const onSubmit = async (e) => {
// //       e.preventDefault()

// //       await createUserWithEmailAndPassword(auth, email, password)
// //         .then((userCredential) => {
// //             // Signed in
// //             const user = userCredential.user;
            
// //             console.log(user);
// //             navigate("/login");
// //             // ...
// //         })
// //         .catch((error) => {
// //             const errorCode = error.code;
// //             const errorMessage = error.message;
// //             console.log(errorCode, errorMessage);
// //             // ..
// //         });


// //     }

// //   return (
// //     <main >        
// //         <section>
// //             <div>
// //                 <div>                  
// //                     <h1> FocusApp </h1>                                                                            
// //                     <form>                                                                                            
// //                         <div>
// //                             <label htmlFor="email-address">
// //                                 Email address
// //                             </label>
// //                             <input
// //                                 type="email"
// //                                 label="Email address"
// //                                 value={email}
// //                                 onChange={(e) => setEmail(e.target.value)}  
// //                                 required                                    
// //                                 placeholder="Email address"                                
// //                             />
// //                         </div>

// //                         <div>
// //                             <label htmlFor="password">
// //                                 Password
// //                             </label>
// //                             <input
// //                                 type="password"
// //                                 label="Create password"
// //                                 value={password}
// //                                 onChange={(e) => setPassword(e.target.value)} 
// //                                 required                                 
// //                                 placeholder="Password"              
// //                             />
// //                         </div>                                             

// //                         <button
// //                             type="submit" 
// //                             onClick={onSubmit}                        
// //                         >  
// //                             Sign up                                
// //                         </button>

// //                     </form>

// //                     <p>
// //                         Already have an account?{' '}
// //                         <NavLink to="/login" >
// //                             Sign in
// //                         </NavLink>
// //                     </p>                   
// //                 </div>
// //             </div>
// //         </section>
// //     </main>
// //   )
// // }

// // export default Signin
// import React, {useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// // import { auth } from '../../firebase';
// import { auth, db, setDoc, doc } from '../../firebase';

// const Signin = () => {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');
//     const [username, setUsername] = useState('');
//     const onSubmit = async (e) => {
//       e.preventDefault()
//       const user = userCredential.user;
//       await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
            
//             console.log(user);
//             navigate("/login");
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//         });
//         await setDoc(doc(db, 'users', user.uid), {
//             username: username,
//           });
    

//     }

//   return (
//     <main >        
//         <section>
//             <div>
//                 <div>                  
//                     <h1> FocusApp </h1>                                                                            
//                     <form>  
//                     <div>
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//                 placeholder="Username"
//               />
//             </div>                                                                                          
//                         <div>
//                             <label htmlFor="email-address">
//                                 Email address
//                             </label>
//                             <input
//                                 type="email"
//                                 label="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}  
//                                 required                                    
//                                 placeholder="Email address"                                
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 label="Create password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)} 
//                                 required                                 
//                                 placeholder="Password"              
//                             />
//                         </div>                                             

//                         <button
//                             type="submit" 
//                             onClick={onSubmit}                        
//                         >  
//                             Sign up                                
//                         </button>

//                     </form>

//                     <p>
//                         Already have an account?{' '}
//                         <NavLink to="/login" >
//                             Sign in
//                         </NavLink>
//                     </p>                   
//                 </div>
//             </div>
//         </section>
//     </main>
//   )
// }

// export default Signin
// // import React, { useState } from 'react';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// // import { auth } from '../../firebase';

// // const Signin = () => {
// //     const navigate = useNavigate();

// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [username, setUsername] = useState(''); // Added username state
// //     const [error, setError] = useState('');

// //     const onSubmit = async (e) => {
// //       e.preventDefault();
      
// //       // Reset any previous error
// //       setError('');

// //       try {
// //         // Create user with email and password
// //         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //         const user = userCredential.user;
        
// //         // Update user profile with username
// //         await updateProfile(user, {
// //           displayName: username,  // Save the username in the displayName field
// //         });

// //         // Optionally, handle other post-signup actions here
// //         console.log('User created:', user);
        
// //         // Navigate to login page after successful sign-up
// //         navigate("/login");

// //       } catch (error) {
// //         // Handle error (e.g., email already in use, weak password)
// //         const errorCode = error.code;
// //         const errorMessage = error.message;
// //         setError(`Error: ${errorMessage}`); // Display error message to user
// //         console.error(errorCode, errorMessage);
// //       }
// //     }

// //     return (
// //       <main>
// //         <section>
// //           <div>
// //             <div>
// //               <h1>FocusApp</h1>
// //               <form onSubmit={onSubmit}>
// //                 <div>
// //                   <label htmlFor="username">Username</label>
// //                   <input
// //                     type="text"
// //                     id="username"
// //                     value={username}
// //                     onChange={(e) => setUsername(e.target.value)}
// //                     required
// //                     placeholder="Username"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label htmlFor="email-address">Email address</label>
// //                   <input
// //                     type="email"
// //                     id="email-address"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                     placeholder="Email address"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label htmlFor="password">Password</label>
// //                   <input
// //                     type="password"
// //                     id="password"
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     required
// //                     placeholder="Password"
// //                   />
// //                 </div>

// //                 {error && <p style={{ color: 'red' }}>{error}</p>}

// //                 <button type="submit">
// //                   Sign up
// //                 </button>
// //               </form>

// //               <p>
// //                 Already have an account?{' '}
// //                 <NavLink to="/login">
// //                   Sign in
// //                 </NavLink>
// //               </p>
// //             </div>
// //           </div>
// //         </section>
// //       </main>
// //     );
// // }

// // export default Signin;
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, setDoc, doc } from '../../firebase';
import './signin.css'
const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with username
      await updateProfile(user, {
        displayName: username,
      });

      // Store username in Firestore under the user's UID
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email,
      });

      // Navigate to login page after successful sign-up
      navigate('/login');
    } catch (error) {
      setError(error.message);
      console.error(error.code, error.message);
    }
  };

  return (
    <main>
      <section>
        <div className='signin'> 
        <header>
              <h1>go-do</h1>
              <p>Your #1 Goal Achiever</p>
            </header>
            <div className='bottom'>
          <h1>Signup to go-do</h1>
          <form onSubmit={onSubmit}>
              
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
              />
            

            
              <input
                type="email"
                id="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
           

            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit">Sign up</button>
          <p>
            Already have an account?{' '}
            <NavLink to="/login">Sign in</NavLink>
          </p>
          </form>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Signin;