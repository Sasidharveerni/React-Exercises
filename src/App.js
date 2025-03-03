
import { useState } from 'react';
import './App.css';
// import FormValidation from './components/FormValidation';
// import Todo from './components/Todo';
import Exercise from './components/Exercise';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: ''
  })
  return (
    <div>
       {/* <FormValidation userData={userData} setUserData={setUserData}/>
       <Todo /> */}
       <Exercise />
    </div>
  );
}

export default App;
