import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { onAuthStateChanged } from "firebase/auth";
import {BrowserRouter as Router} from'react-router-dom';
import {Routes,Route} from'react-router-dom';
import './App.css'
import Login from './components/login/login.jsx'
import Signin from './components/signin/signin.jsx'
import Home from './components/home/home.jsx'
import Buget from './components/buget/buget.jsx'
import Notes from './components/notes/notes.jsx';
import Todo from './components/todo/todo.jsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/buget' element={<Buget/>}/>
            <Route path='/notes' element={<Notes/>}/>
            <Route path='/todo' element={<Todo/>}/>
          </Routes>
        </section>
      </div>
     </Router>
    // <>
    // <Login/>
    // <Home/>

    // </>
  )
}

export default App
