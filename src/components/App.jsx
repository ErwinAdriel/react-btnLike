import './App.css';
import { useState } from 'react';

function App() {

  const [likes, setLikes] = useState (0);
  const darLike = () =>{
    setLikes(likes + 1);
  };

  return (
    <div className='body'>
      <h1>Likes {likes}</h1>
      <button onClick={darLike}>Me gusta</button>
    </div>
  );
}

export default App;
