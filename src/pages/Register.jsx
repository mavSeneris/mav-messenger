import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  async function handdleSubmit(e) {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const metadata = {
        contentType: 'image/jpeg'
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        (error) => {
          setErr(false);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.id), {})
          });

        }
      );

    } catch (err) {
      setErr(true)
    }

  }



  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='form-logo'>MAV</span>
        <span className='form-title'>Register</span>
        <form onSubmit={handdleSubmit}>
          <input type={'text'} placeholder='displayName' />
          <input type={'email'} placeholder='email' />
          <input type={'password'} placeholder='password' />
          <input style={{ display: "none" }} type={'file'} id='file' />
          <label className='avatar-label' htmlFor='file'>
            <svg stroke="#36c377" fill="#36c377" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" stroke="#000" strokeWidth="2" d="M1,1 L19,1 L19,19 L1,19 L1,1 Z M5,19 L5,23 L23,23 L23,5.97061363 L18.9998921,5.97061363 M6,8 C6.55228475,8 7,7.55228475 7,7 C7,6.44771525 6.55228475,6 6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 Z M2,18 L7,12 L10,15 L14,10 L19,16"></path>
            </svg>

            <span className='file-text'>add an avatar</span>
          </label>
          <button className='signIn-btn'>Sign Up</button>
          {err && <span>Oops something went wrong!</span>}
        </form>
        <span className='login-link'>You have an account? Login</span>
      </div>
    </div>
  )
}
