// frontend/src/components/SignupForm.js


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect,useState } from 'react';
import UserContext from '../context/UserContext';

function Signin () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const { setPass } = useContext(UserContext);


 
  const handleSubmit = async (e) => {
    e.preventDefault();
   
      let result= await axios.post('http://localhost:8080/signin', {
        email,
        password,
      });
      if(result.data == true){
          setPass(true)
          navigate('/admin')
      }else{
        alert("wrong detail")
      }
      
    };
    
  const navigate = useNavigate()

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" >Sign Up</button>
    </form>
 
  );
};

export default Signin;
