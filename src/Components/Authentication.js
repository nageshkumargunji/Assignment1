
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvide } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithPopup, signOut } from 'firebase/auth';

const Authentication = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvide);
      setUser(result.user);
      navigate('/timer'); 
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h1>Sign In with Google</h1>
          <button onClick={handleSignInWithGoogle}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default Authentication;
