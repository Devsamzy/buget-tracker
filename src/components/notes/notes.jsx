import React, { useState, useEffect } from 'react';
import { auth, db, getDoc, doc } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import {FaAlignJustify, FaAngrycreative, FaArrowRight, FaPlusCircle, FaRegUserCircle, FaUser} from 'react-icons/fa'
import './notes.css';
import {useNavigate } from 'react-router-dom';


const Notes = () => {

  return (
<div className="notes">
    <h1>noes</h1>
</div>
  );
};

export default Notes;