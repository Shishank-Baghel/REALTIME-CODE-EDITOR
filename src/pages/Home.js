import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';

const Home = () => {
const [roomId,setRoomId] = useState('');
const [userName,setUserName] = useState('');
const createNewRoom = ()=>{
  const Id = uuidv4();
  setRoomId(Id);
  toast.success('Created New Room');
};

// const joinRoom = (e)={
    
// };
  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
             <img style={{width:100}} src='https://img.freepik.com/free-vector/gradient-coding-logo-template_23-2148809439.jpg'></img>
             <h4 className='mainLabel'>Paste invitation ROOM Id</h4>
             <div className='inputGroup'>
                <input
                value={roomId}
                onChange={e=> setRoomId(e.target.value)}
                type='text'
                className='inputBox'
                placeholder='ROOM ID'
                />
                  <input
                  value={userName}
                  onChange={(e)=>{setUserName(e.target.value)}}
                type='text'
                className='inputBox'
                placeholder='USER-NAME'
                />
                <button  className='btn joinBtn'>Join</button>
                <span className='createInfo'>If you don't have an invite then create &nbsp; <Link onClick={createNewRoom} style={{color:'green'}} href='' className='createNewBtn'>new room</Link></span>
             </div>
        </div> 
        <footer>
            <h4>
                Built with 🧡 by <Link href='https://github.com/Shishank-Baghel/REALTIME-CODE-EDITOR'>SHISHANK</Link>
            </h4>
            </footer> 
    </div>
  )
}

export default Home 