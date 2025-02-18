import React, { useState, useEffect } from 'react';
// import { auth, db, getDoc, doc } from '../../firebase';
// import { onAuthStateChanged } from "firebase/auth";
// import {FaAlignJustify, FaAngrycreative, FaArrowRight, FaPlusCircle, FaRegUserCircle, FaUser} from 'react-icons/fa'
import './header.css';
import {useNavigate } from 'react-router-dom';
import {FaTimes, FaAngrycreative, FaArrowRight, FaCalendarDay, FaPlus, FaRegUserCircle, FaUser, FaTimesCircle} from 'react-icons/fa'
import { FaArrowDown, FaArrowRightToBracket, FaDropbox } from 'react-icons/fa6';

const Header = ({newbudget}) => {
      const [pageno,setPageno]=useState(0);
const closeadd=()=>{
    document.querySelector(".addpage").style.display="none";
  }
  const openadd=()=>{
    document.querySelector(".addpage").style.display="flex";
  }
  const add=document.querySelector(".addpage");
  const grandTotal=newbudget.reduce((total,item)=>total+item.amount,0)
  return (
    <div className="header">
    <div className="head">
                <FaUser className='uimg'></FaUser>
                {/* <FaAlignJustify></FaAlignJustify> */}
                    {/* <div className="figure">N10,000</div>
                    <p>Total Balance</p> */}
                     <div className="name">Budget Tracker</div>
                <div className="menu"><div className="nav"></div></div>
            </div>
           <div className="am">
            <div className="bal">
                <li>Total Balance</li>
                <div className="price">$1000</div>
            </div>
            <div className="divisor"></div>
            <div className="ex">
            <li>Total Expenses</li>
            <div className="price">-${grandTotal}</div>
            </div>
           </div>
           <div id="nav">
                <button id='add' onClick={openadd}><FaPlus></FaPlus>Add Money</button>
                {/* <div className='switch'> */}
                    {/* <li className={pageno===0 ?'sw active': 'sw'} onClick={()=>setPageno(0)}>Expenses</li>
                    <li className={pageno===1 ?'sw active': 'sw'} onClick={()=>setPageno(1)}>Income</li> */}
                    {/* <li className="sw">January <FaDropbox></FaDropbox></li> */}
                    <select name="" id="" className='sw' >
                    <option value="January"> January</option>
                    <option value="February"> Februrary</option>
                    <option value="March">March</option>
                    </select>
                {/* </div> */}
        </div>
    </div>        
  );
};

export default Header;