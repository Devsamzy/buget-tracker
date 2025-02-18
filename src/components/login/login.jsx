
import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { getDoc } from '../../firebase';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { NavLink, useNavigate } from 'react-router-dom';
// import { getDatabase, query } from 'firebase/database';
import './login.css';
// import Side from "../side/side";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();
    // const db = getDatabase();

    try {
      // Query Firestore to
      //  find the user by username
      const usersRef = collection(db, 'users'); // Assumes the collection is named 'users'
      const q = query(usersRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('Username does not exist');
        return;
      }

      // Retrieve the email associated with the username
      let email = null;
      querySnapshot.forEach((doc) => {
        email = doc.data().email;
      });




        // Query the database for the username
    //   const usersRef = ref(db, 'users');
    //   const usernameQuery = query(usersRef, orderByChild('username'), equalTo(username));
    //   const snapshot = await get(usernameQuery);

    //   if (!snapshot.exists()) {
    //     setError('Username does not exist');
    //     return;
    //   }

    //   // Retrieve the email associated with the username
    //   let email = null;
    //   snapshot.forEach((childSnapshot) => {
    //     email = childSnapshot.val().email;
    //   });

      if (!email) {
        setError('Email not found for the given username');
        return;
      }

      // Sign in with email and password
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Successfully signed in
      const user = userCredential.user;
      console.log('User signed in:', user);
      navigate('/home');
    } catch (err) {
      console.error('Error signing in:', err.message);
      setError(err.message);
    }
  };
  const items=[
    "heo","sweep"
  ];
  return (
    <>
      <main>
        <section>
          {/* <Side></Side> */}
          <div className="login">
            <header>
              <h1>go-do</h1>
              <p>Your #1 Goal Achiever</p>
              {items.map((item,i)=>{
                   <p key={i}>{item}</p>
              })}
            </header>

            <div className="bottom">
              <form onSubmit={onLogin}>
                <h1>Login to go-do</h1>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Username"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
                <button type="submit">Login</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <p className="text-sm text-white text-center">
                  No account yet?{' '}
                  <NavLink to="/signin">
                    Sign up
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
