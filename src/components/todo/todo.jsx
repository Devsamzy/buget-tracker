import React, { useState, useEffect } from 'react';
import { auth, db, getDoc, doc } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import {FaAlignJustify, FaAngrycreative, FaArrowRight, FaPlusCircle, FaRegUserCircle, FaUser} from 'react-icons/fa'
import './todo.css';
import {useNavigate } from 'react-router-dom';


const Todo = () => {

  return (
<div className="todo">
	<div class="con">
   <h1>gosave</h1>
   <div class="header">
     <input type="text" name="" class="info"/>
      <button class="btn">Add</button>
   </div>
    <div id="res">
    	<p>**Your Savings Will Show Here**</p>
    </div>
    <div id="bg">
  	<div class="progress-bar"></div>
    </div>
  </div>
</div>
  );
};

export default Todo;