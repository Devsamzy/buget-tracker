import React, { useState, useEffect } from 'react';
import { auth, db, getDoc, doc } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import {FaAlignJustify, FaAngrycreative, FaArrowRight, FaPlusCircle, FaRegUserCircle, FaUser} from 'react-icons/fa'
import './home.css';
import {useNavigate } from 'react-router-dom';


const Home = () => {
  const [taskno,setTaskno]=useState(0);
  const [username, setUsername] = useState('user');
  const [error, setError] = useState('');
  // const [tasks, setTasks] = useState(''
//     [
//     {
//       "name":"schoo",
//       "percent":"80%"
//     },
//   {
//       "name":"hoo",
//       "percent":"50%"
//     },
//   // }
// ]
// );

  const navigate = useNavigate();
  const tasks = [
    {
      "name":"schoo",
      "percent":"80%"
    },
  {
      "name":"hoo",
      "percent":"50%"
    },
];

  // useEffect(()=>{
  //   onAuthStateChanged(auth,(user)=>{
  //     if(user){
  //       const uid=user.uid;
  //       console.log("uid",uid)
  //     }
  //     else{
  //       console.log('user is ogged out');
  //       navigate('/login');
  //     }
  //   });
  // },[])

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          // Fetch user data from Firestore using the UID
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUsername(docSnap.data().username); // Get username from Firestore
          } else {
            setError('No user data found');
          }
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchUserData();
  }, []); // Runs once when the component mounts
const run=()=>{
  navigate('/buget')
}

  return (
        <div className="home">
   <header>
    <FaUser className='uimg'/>
    <div className="menu">
        <div className="nav"></div>
    </div>
   </header>
   {/* {taskcs} */}

   <div className="body">
    <div className="intro">
        Hello,<br />
        {username}
    </div>
    <div className="tasks">

        <div className="head">
            <li className={taskno===0 ?'task active': 'task'} onClick={()=>setTaskno(0)}>  Todo-list</li>
            <li className={taskno===1 ?'task active': 'task'} onClick={()=>setTaskno(1)}> savings</li>
            <li className={taskno===2 ?'task active': 'task'} onClick={()=>setTaskno(2)}> Notes</li>
        </div>
    <div className="taskcards">
      <div className="taskcard" onClick={run}><FaPlusCircle className='plus'/><div className="content">Create a new Task</div></div>
{tasks.map((taskc,index)=>(
  <li key={index} className='taskcard'><div className='percent'>{taskc.percent}</div><div className="text">{taskc.name}</div></li>
))}
      <div className="taskcard"></div>
      <div className="taskcard more"><FaArrowRight className='arrow'/><div className="content">See All...</div></div>
    </div>

   </div>
    <div className="blogs">
      <h1>blogs</h1>
    </div>
   </div>
   </div>
  );
};

export default Home;