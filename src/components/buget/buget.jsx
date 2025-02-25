
// import React, { useEffect, useState } from 'react';
// // import { getDoc } from '../../firebase';
// import { db } from '../../firebase';
// import { collection, query, where, getDocs, documentId, Timestamp } from 'firebase/firestore';
// import { NavLink, useNavigate } from 'react-router-dom';
// // import { getDatabase, query } from 'firebase/database';
// import './buget.css';
// import Page from './page/page'
// import Header from './header/header'
// import {FaTimes, FaAngrycreative, FaArrowRight, FaCalendarDay, FaPlus, FaRegUserCircle, FaUser, FaTimesCircle} from 'react-icons/fa'
// import { FaArrowRightToBracket } from 'react-icons/fa6';

// const closeadd=()=>{
//   document.querySelector(".addpage").style.display="none";
// }
// const openadd=()=>{
//   document.querySelector(".addpage").style.display="flex";
// }
// const add=document.querySelector(".addpage");
// const Buget = () => {
//   const [pageno,setPageno]=useState(0);
//   // const [price,setPrice]=useState("");
//   // const [newbuget,SetNewbuget]=useState([]);
//   // const [category,SetCategory]=useState("");
//   // const [medium,SetMedium]=useState("");
//   // const disp = (value)=> {
//   //   setPrice((prev) =>prev + value);
//   // };
//  // Load from localStorage or initialize as empty array
//   // const [newbudget, setNewbudget] = useState(() => {
//   //   const savedData = localStorage.getItem("budgetData");
//   //   return savedData ? JSON.parse(savedData) : [];
//   // });
  
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState("");
  
//   // var categoryin=document.querySelector(".category")

//   // Save to localStorage whenever newbudget changes
//   // useEffect(() => {
//   //   localStorage.setItem("budgetData", JSON.stringify(newbudget));
//   // }, [newbudget]);
  
//   // Function to add a new budget entry
//   // const addBudget = () => {
//   //   // SetCategory(categoryin.value.trim());

//   //   if (category && amount) {
//   //     const newEntry = { id: Date.now(), category, amount: Number(amount) };
//   //     const updatedBudget = [...newbudget, newEntry];

//   //     setNewbudget(updatedBudget);
//   //     setCategory("");
//   //     setAmount("");
//   //   }
//   // };




//   // var mediumin=document.querySelector(".means")
//   // let groupe=JSON.parse(localStorage.getItem("expensesd"))||{};
//   // const clear=()=>{
//   //   setPrice((prev)=>prev.slice(0,-1))
//   // }
//    // Function to remove a specific item
//   //  const removeBudgetItem = (id) => {
//   //   const updatedBudget = newbudget.filter((entry) => entry.id !== id);
//   //   setNewbudget(updatedBudget);
//   // };
//   // useEffect(()=>{
//   //   const storedItems=localStorage.getItem('items')
//   // })
//     // const addBuget=()=>{
//     // // console.log("buge added");
//     // const newItem={
//     //   category,
//     //   price,
//     //   timestamp:Date.now()
//     // }
//     // SetNewbuget([...newbuget,newItem])
    
//     // const amount = price;
//     // const expense={amount};
//     // document.querySelector(".addpage").style.display="none";
    
//   //   // if (!groupe[category]){
//   //   //   groupe[category]=[];
      
//   //   // }
    
//   //   groupe.push(newbuget);
//   //   // SetNewbuget(groupe[category]);
//   //   // snewbuget=groupe[category];
//   //   saveToLocalStorage();
    
//   //   console.log(groupe);
//   //   // updateExpenseList();
//   // }
  
//   // function updateExpenseList() {
//   //   let totalAmount = groupe[category].reduce((sum, expense) => sum + expense.amount, 0);
//   //   SetNewbuget(totalAmount)
//   // }
// //   function saveToLocalStorage() {
// //     localStorage.setItem("expensesd", JSON.stringify(groupe));
// //     console.log(groupe)
// // }
// // Initialize the expense list on page load
// // updateExpenseList();
//   return (
//     <>
//       <main>
//         <section>
//             {/* <div className="addpage">

//                 <div className="addmoney">
//                   <button className="close" onClick={closeadd}></button>
//                     <div className="head">
//                         <select className="means">
//                           <option value="Cash">Expense</option>
//                           <option value="Cash">Income</option>
//                         </select>
//                         <select className="category">
//                           <option value="shop">Shopping</option>
//                           <option value="food">Food</option>
//                           <option value="bill">Bill</option>
//                           <option value="rent">Rent</option>

//                         </select>
//                     </div>
//                     <p>Expenses</p>
//                     <input className="input" id='input' type="text" value={amount} readOnly placeholder='0.00'/>

//                     <div className="btns">
//                         <button className='no' onClick={()=>disp("1")} >1</button>
//                         <button className='no' onClick={()=>disp("2")}>2</button>
//                         <button className='no' onClick={()=>disp("3")}>3</button>
//                         <button className='no' onClick={clear}><FaTimesCircle></FaTimesCircle></button>
//                         <button className='no' onClick={()=>disp("4")}>4</button>
//                         <button className='no' onClick={()=>disp("5")}>5</button>
//                         <button className='no'onClick={()=>disp("6")}>6</button>
//                         <button className='no' onClick={()=>disp("4")}><FaCalendarDay></FaCalendarDay></button>
//                         <button className='no' onClick={()=>disp("7")}>7</button>
//                         <button className='no' onClick={()=>disp("8")}>8</button>
//                         <button className='no' onClick={()=>disp("9")}>9</button>
//                         <button className='no' onClick={()=>disp("$")}>$</button>
//                         <button className='no' onClick={()=>disp("1")}>0</button>
//                         <button className='no' onClick={()=>disp("1")}>,</button>
//                     </div>
//                 </div>
//             </div> */}
//           <div className="buget">

//           {/* Display Budget Entries */}
//       <div>
//       {/* <button onClick={addBudget}>Add</button> */}
//         {/* {newbudget.map((entry) => (
//           <div key={entry.id}>
//             <h3>{entry.category}</h3>
//             <p>{entry.amount}</p>
//             <button onClick={() => removeBudgetItem(entry.id)}>Delete</button>
//           </div>
//         ))} */}
//         </div>
//             {/* <Header></Header> */}
//             <Page pageno={pageno} ></Page>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Buget;






// import React, { useState, useEffect } from "react";

// const BudgetApp = () => {
//   // Load from localStorage or initialize as empty array
//   const [newbudget, setNewbudget] = useState(() => {
//     const savedData = localStorage.getItem("budgetData");
//     return savedData ? JSON.parse(savedData) : [];
//   });

//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState("");

//   // Save to localStorage whenever newbudget changes
//   useEffect(() => {
//     localStorage.setItem("budgetData", JSON.stringify(newbudget));
//   }, [newbudget]);

//   // Function to add a new budget entry
//   const addBudget = () => {
//     if (category && amount) {
//       const newEntry = { id: Date.now(), category, amount: Number(amount) };
//       const updatedBudget = [...newbudget, newEntry];

//       setNewbudget(updatedBudget);
//       setCategory("");
//       setAmount("");
//     }
//     console.log(newbudget)  };

//   // Function to remove a specific item
//   const removeBudgetItem = (id) => {
//     const updatedBudget = newbudget.filter((entry) => entry.id !== id);
//     setNewbudget(updatedBudget);
//   };

//   return (
//     <div>
//       <h1>Budget Tracker</h1>

//       {/* Input Section */}
//       <input
//         type="text"
//         placeholder="Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button onClick={addBudget}>Add</button>

//       {/* Display Budget Entries */}
//       <div>
//         {newbudget.map((entry) => (
//           <div key={entry.id}>
//             <h3>{entry.category}</h3>
//             <p>{entry.amount}</p>
//             <button onClick={() => removeBudgetItem(entry.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BudgetApp;






















import React, { useState, useEffect } from "react";
// import React, { useEffect, useState } from 'react';
// import { getDoc } from '../../firebase';
import { db } from '../../firebase';
import { collection, query, where, getDocs, documentId, Timestamp } from 'firebase/firestore';
import { NavLink, useNavigate } from 'react-router-dom';
// import { getDatabase, query } from 'firebase/database';
import './buget.css';
import Page from './page/page'
import Header from './header/header'
import {FaTimes, FaAngrycreative, FaArrowRight, FaCalendarDay, FaPlus, FaRegUserCircle, FaUser, FaTimesCircle} from 'react-icons/fa'
import { FaArrowRightToBracket } from 'react-icons/fa6';


const closeadd=()=>{
  document.querySelector(".addpage").style.display="none";
}
const BudgetApp = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const clear=()=>{
    setAmount((prev)=>prev.slice(0,-1))
  }
  // Load from localStorage or initialize as empty array
  const [newbudget, setNewbudget] = useState(() => {
    const savedData = localStorage.getItem("budgetData");
    return savedData ? JSON.parse(savedData) : [];
  });
  // const [pageno,setPageno]=useState(0);
  
  const disp = (value)=> {
  setAmount((prev) =>prev + value);
};
// Save to localStorage whenever newbudget changes
var allcategory=document.querySelector(".category");
useEffect(() => {
  localStorage.setItem("budgetData", JSON.stringify(newbudget));
}, [newbudget]);
// Function to add a new budget entry
const addBudget = () => {
  var categoryin=allcategory.value.trim();
    console.log(categoryin)
    setCategory(categoryin);
    if (categoryin && amount) {
      const newEntry = { id: Date.now(), category:categoryin , amount: Number(amount) };
      const updatedBudget = [...newbudget, newEntry];
      console.log(category);
      
      setNewbudget(updatedBudget);
      setCategory("");
      setAmount("");
    }
  
    closeadd();
  };

  // Function to remove a specific item
  const removeBudgetItem = (id) => {
    const updatedBudget = newbudget.filter((entry) => entry.id !== id);
    setNewbudget(updatedBudget);
  };

console.log(newbudget);
  return (
    <>
    <main>
    <section className="budgetpage">

       <div className="addpage">

                  <div className="addmoney">
                   <button className="close" onClick={closeadd}></button>
                     <div className="head">
                         <select className="means">
                           <option value="Cash">Expense</option>
                           <option value="Cash">Income</option>
                         </select>
                         <select className="category">
                           <option value="shopping">Shopping</option>
                           <option value="food">Food</option>
                           <option value="bill">Bill</option>
                           <option value="rent">Rent</option>
                         </select>
                     </div>
                     <p>Expenses</p>
                     <input className="input" id='input' type="text" value={amount} readOnly placeholder='0.00'/>

                     <div className="btns">
                         <button className='no' onClick={()=>disp("1")} >1</button>
                          <button className='no' onClick={()=>disp("2")}>2</button>
                         <button className='no' onClick={()=>disp("3")}>3</button>
                         <button className='no' onClick={clear}><FaTimesCircle></FaTimesCircle></button>
                         <button className='no' onClick={()=>disp("4")}>4</button>
                         <button className='no' onClick={()=>disp("5")}>5</button>
                         <button className='no'onClick={()=>disp("6")}>6</button>
                         <button className='no' onClick={()=>disp("4")}><FaCalendarDay></FaCalendarDay></button>
                         <button className='no' onClick={()=>disp("7")}>7</button>
                         <button className='no' onClick={()=>disp("8")}>8</button>
                         <button className='no' onClick={()=>disp("9")}>9</button>
                         <button className='big' onClick={addBudget}><FaArrowRight></FaArrowRight></button>
                         <button className='no' onClick={()=>disp("$")}>$</button>
                         <button className='no' onClick={()=>disp("0")}>0</button>
                         <button className='no' onClick={()=>disp("00")}>00</button>
                     </div>
                 </div>
             </div> 
      <div className="budget">
      <Header newbudget={newbudget} className='header'></Header>
      <Page newbudget={newbudget} removeBudgetItem={removeBudgetItem} className='pages'></Page>
      </div>
    </section>
    </main>
    </>
  );
};

export default BudgetApp;




