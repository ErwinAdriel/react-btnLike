import './App.css';
import { useState } from 'react';

function App() {

  const [likes, setLikes] = useState (0);

  return (
    <div className='body'>
      <h1>Likes {likes}</h1>
      <button onClick={setLikes}>Me gusta</button>
    </div>
  );
}

export default App;
