
import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { getDoc } from '../../firebase';
import { db } from '../../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { NavLink, useNavigate } from 'react-router-dom';
// import { getDatabase, query } from 'firebase/database';
import './page.css';
import { FaShirt,FaCar, FaDeleteLeft, FaDelicious, FaTrash, FaHouse,FaRegTrashCan, FaMoneyBill, FaMoneyBills, FaMoneyBillWave, FaMoneyBill1, FaLandMineOn } from 'react-icons/fa6';
// import { FiTrash } from 'react-icons/fi';
import { FaGift, FaPlus, FaPizzaSlice, FaMoneyBillAlt, FaTools, FaSmile, FaClock } from 'react-icons/fa';
// import Side from "../side/side";
import { MdBuild, MdDelete, MdHourglassEmpty, MdHourglassFull, MdHourglassTop, MdOutlineHourglassBottom, MdOutlineHourglassFull, MdOutlineHourglassTop } from 'react-icons/md';
const imageSource={
  "shopping":<FaShirt className='img'/>,
  "food":<FaPizzaSlice className='img'/>,
  "bill":<FaMoneyBillWave className='img'/>,
  "rent":<FaHouse className='img'/>

}
const colors={
  "shopping":"red",
  "food":"blue",
  "bill":"green",
  "rent":"red"
}
const Page = ({newbudget,removeBudgetItem}) => {
  const [pageno,setPageno]=useState(0);
  const closeadd=()=>{
    document.querySelector(".addpage").style.display="none";
  }
  const openadd=()=>{
    document.querySelector(".addpage").style.display="flex";
  }
  const add=document.querySelector(".addpage");
  const categoryTotal=newbudget.reduce((acc,item)=>{
      const{category,amount}=item;
      if (!acc[category]){
        acc[category]=0
      }
      acc[category]+=amount;
      return acc;
    },{});
    const categoryList=Object.entries(categoryTotal).map(([category,total])=>({
      category,
      total,
    }));
  return (
    <div className='page'>
      <header>
        <div>
        </div>
        <div className="subh">
          <div className="goal">
          <div className="per">
          <FaCar className='car'></FaCar>

          </div>
          <p>savings on goal</p>
          </div>
          <div className="moredetails">{categoryList.map(({category,total},index)=>(
            <div key={index}>
              <h3>{category}</h3>
              <p>total:${total}</p>
            </div>
          ))}</div>
        </div>

        </header>
      {/* <div className='chart'>
        <div className="id"><div className="bar" style={{height:"100%"}}></div></div>
        <div className="id"><div className="bar" style={{"--i":"60%","--co":"red"}}>o</div></div>
        <div className="id"><div className="bar" style={{"--i":"80%","--co":"blue"}}></div></div>
        <div className="id"><div className="bar" style={{"--i":"30%","--co":"green"}}></div></div>
        <div className="id"><div className="bar" style={{"--i":"13%","--co":"purple"}}></div></div>
        <div className="id"><div className="bar" style={{"--i":"30%","--co":"cyan"}}></div></div>
        <div className="id"><div className="bar" style={{"--i":"50%","--co":"yellow"}}></div></div>
        <div className="id"><div className="bar" style={{"--i":"10%","--co":"orange"}}></div></div>
      </div> */}
      <div className='analysis'>
        
            <p className={pageno===0 ?'wind active': 'wind'} onClick={()=>setPageno(0)}>All</p>
            <p className={pageno===1 ?'wind active': 'wind'} onClick={()=>setPageno(1)}>income</p>
            <p className={pageno===2 ?'wind active': 'wind'} onClick={()=>setPageno(2)}>expenses</p>
      </div>
      {/* <div className="details">
        <li><div className='imgbg' style={{"--bg":"red"}} ><FaShirt className='img shirt'></FaShirt> </div><div className="info"><div className="head">Shopping</div><div className="source">Cash</div></div> <div className="pricelist"><div className="head">{newbudget.expense}</div><div className="percent">35%</div></div></li>
        <li><div className='imgbg' style={{"--bg":"blue"}}><FaGift className='img gift'></FaGift></div> <div className="info"><div className="head">Shopping</div><div className="source">Cash</div></div> <div className="pricelist"><div className="head">468.50</div><div className="percent">35%</div></div></li>
        <li><div className='imgbg' style={{"--bg":"green"}}><FaPizzaSlice className='img pizza'></FaPizzaSlice></div> <div className="info"><div className="head">Shopping</div><div className="source">Cash</div></div> <div className="pricelist"><div className="head">468.50</div><div className="percent">35%</div></div></li> */}
          {pageno===0&&(

        <div className="details">

          {/* display budget entries */}
        {newbudget.length===0?(
          //fall back text if the buget list is empty
          <p className='fallback'>no items found, please add an Item.</p>
        ):(
          <div>
        {newbudget.map((entry)=>(
         <li key={entry.id}>
          <div className='imgbg' style={{"--bg":colors[entry.category]}} >
            {/* <FaShirt className='img shirt'></FaShirt>  */}
            {imageSource[entry.category]}
          </div>
            <div className="info">
              <div className="head">{entry.category}</div>
              <div className="source">{new Date(entry.id*1000).toLocaleString()}</div>
            </div>
               <div className="pricelist">
                <div className="pricesec">
                {/* <div className="head">{newbuget.expense}</div> */}
              <div className='head'>${entry.amount}</div>
                <div className="percent">35%</div>
                </div>
                <MdDelete className='delbtn' onClick={() => removeBudgetItem(entry.id)}></MdDelete>
          </div>
          {/* <FaDeleteLeft></FaDeleteLeft>
          <FaDelicious></FaDelicious> */}
        {/* <MdDelete></MdDelete> */}
          {/* <FaRegTrashCan></FaRegTrashCan> */}

        {/* </li> */}
                {/* ))} */}
                </li>
        ))}
        
        </div>
      )}
        </div>

)}
{pageno===1&&(
  <div className='NA'>
    <MdOutlineHourglassTop size={31} className='hour'></MdOutlineHourglassTop>
  <p className=''>Coming Soon...</p>
  </div>
)}
{pageno===2&&(
  <div className='NA'>
    <MdHourglassTop size={31} className='hour'></MdHourglassTop> 
  <p className=''>Coming Soon...</p>
  </div>
)}



      </div>
      
    // </div>
  );
};

export default Page;
